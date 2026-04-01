import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioItems } from "../data/portfolioItems";
import {
  PortfolioGrid,
  PortfolioOverlay,
  PortfolioScrim,
  GridCell,
  GridCellInner,
  GridCellGradient,
  GridCellSubtitle,
  GridCellTitle,
  ExpandedCard,
  ExpandedHero,
  ExpandedHeroGradient,
  ExpandedHeroText,
  ExpandedBody,
  ExpandedDescription,
  TagRow,
  Tag,
  ExpandedLink,
  CloseButton,
} from "../styles/Portfolio";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const cellVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 22 } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const Portfolio = ({ onClose }) => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* Grid */}
      <AnimatePresence>
        {!selected && (
          <PortfolioGrid
            key="grid"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {portfolioItems.map((item) => (
              <GridCell
                key={item.id}
                layoutId={`card-${item.id}`}
                bg={item.bg}
                img={item.img}
                variants={cellVariants}
                onClick={() => setSelected(item)}
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <GridCellGradient />
                <GridCellInner>
                  <GridCellSubtitle>{item.subtitle}</GridCellSubtitle>
                  <GridCellTitle>{item.title}</GridCellTitle>
                </GridCellInner>
              </GridCell>
            ))}
          </PortfolioGrid>
        )}
      </AnimatePresence>

      {/* Expanded overlay */}
      <AnimatePresence>
        {selected && (
          <>
            <PortfolioScrim
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <PortfolioOverlay key="overlay">
              <ExpandedCard
                layoutId={`card-${selected.id}`}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              >
                <ExpandedHero bg={selected.bg} img={selected.img} style={{ position: "relative" }}>
                  <ExpandedHeroGradient />
                  <CloseButton onClick={() => setSelected(null)}>✕</CloseButton>
                  <ExpandedHeroText>
                    <GridCellSubtitle>{selected.subtitle}</GridCellSubtitle>
                    <GridCellTitle style={{ fontSize: "1.8rem" }}>{selected.title}</GridCellTitle>
                  </ExpandedHeroText>
                </ExpandedHero>
                <ExpandedBody>
                  <ExpandedDescription>{selected.description}</ExpandedDescription>
                  <TagRow>
                    {selected.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </TagRow>
                  {selected.url && (
                    <ExpandedLink href={selected.url} target="_blank" rel="noopener noreferrer">
                      View →
                    </ExpandedLink>
                  )}
                </ExpandedBody>
              </ExpandedCard>
            </PortfolioOverlay>
          </>
        )}
      </AnimatePresence>

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        style={{ position: "absolute", top: "1.5rem", left: "1.5rem", zIndex: 102 }}
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
    </>
  );
};

export { Portfolio };
