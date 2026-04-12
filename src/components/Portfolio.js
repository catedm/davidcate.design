import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioSections } from "../data/portfolioItems";
import { CaseStudy } from "./CaseStudy";
import {
  PortfolioGrid,
  PortfolioScrim,
  GridCell,
  GridCellInner,
  GridCellGradient,
  GridCellSubtitle,
  GridCellTitle,
  ExpandedCard,
  ExpandedHeroGradient,
  ExpandedDescription,
  TagRow,
  Tag,
  ExpandedLink,
  CloseButton,
} from "../styles/Portfolio";

const allItems = portfolioSections.flatMap((s) => s.items);

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const cellVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

const Portfolio = ({ onClose }) => {
  const [selected, setSelected] = useState(null);
  const [caseStudyItem, setCaseStudyItem] = useState(null);

  const anyOpen = selected || caseStudyItem;

  return (
    <div style={{ width: "100%", position: "relative", paddingBottom: "3rem" }}>
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ padding: "1rem 2rem 0" }}
      >
        <button
          onClick={onClose}
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff",
            borderRadius: "999px",
            padding: "0.4rem 1rem",
            cursor: "pointer",
            fontSize: "0.9rem",
            fontWeight: 600,
            backdropFilter: "blur(6px)",
          }}
        >
          ← Back
        </button>
      </motion.div>

      <PortfolioGrid
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {allItems.map((item) => (
          <GridCell
            key={item.id}
            layoutId={`card-${item.id}`}
            bg={item.bg}
            img={item.image}
            colSpan={item.colSpan || 6}
            variants={cellVariants}
            onClick={() => {
              if (anyOpen) return;
              if (item.caseStudy) { setCaseStudyItem(item); } else { setSelected(item); }
            }}
            style={{
              opacity: anyOpen && (!selected || selected.id !== item.id) && (!caseStudyItem || caseStudyItem.id !== item.id) ? 0.25 : 1,
              pointerEvents: anyOpen ? "none" : "auto",
              cursor: anyOpen ? "default" : "pointer",
            }}
            whileHover={
              !anyOpen
                ? { scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }
                : {}
            }
          >
            <GridCellGradient />
            <GridCellInner>
              <GridCellSubtitle>{item.subtitle}</GridCellSubtitle>
              <GridCellTitle>{item.title}</GridCellTitle>
            </GridCellInner>
          </GridCell>
        ))}
      </PortfolioGrid>

      {/* Expanded overlay */}
      <AnimatePresence>
        {anyOpen && (
          <>
            <PortfolioScrim
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setSelected(null); setCaseStudyItem(null); }}
            />
            <div
              key="overlay-container"
              style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 101,
                pointerEvents: "none",
              }}
            >
              {caseStudyItem ? (
                <div style={{ pointerEvents: "auto" }}>
                  <CaseStudy
                    item={caseStudyItem}
                    onClose={() => setCaseStudyItem(null)}
                  />
                </div>
              ) : (
                <ExpandedCard
                  layoutId={`card-${selected.id}`}
                  bg={selected.bg}
                  img={selected.image}
                  transition={{ type: "spring", stiffness: 300, damping: 35 }}
                  style={{ pointerEvents: "auto" }}
                >
                  <ExpandedHeroGradient />
                  <CloseButton
                    onClick={() => setSelected(null)}
                    style={{ position: "absolute", top: "1rem", right: "1rem" }}
                  >
                    ✕
                  </CloseButton>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.18, duration: 0.22 }}
                    style={{ marginTop: "auto", padding: "2.5rem 2rem 2rem", position: "relative", zIndex: 1 }}
                  >
                    <GridCellSubtitle style={{ fontSize: "0.85rem" }}>{selected.subtitle}</GridCellSubtitle>
                    <GridCellTitle style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", marginBottom: "1rem" }}>
                      {selected.title}
                    </GridCellTitle>
                    <ExpandedDescription>{selected.description}</ExpandedDescription>
                    <TagRow style={{ marginTop: "1.25rem" }}>
                      {selected.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </TagRow>
                    {selected.url && (
                      <ExpandedLink
                        href={selected.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginTop: "1.25rem" }}
                      >
                        View →
                      </ExpandedLink>
                    )}
                  </motion.div>
                </ExpandedCard>
              )}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Portfolio };
