import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CloseButton, TagRow, Tag } from "../styles/Portfolio";

const BG = "#161616";
const BORDER = "rgba(255,255,255,0.08)";

const Eyebrow = ({ children }) => (
  <p style={{
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.13em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.3)",
    margin: "0 0 0.75rem",
  }}>
    {children}
  </p>
);

const Divider = () => (
  <div style={{ height: 1, background: BORDER, margin: "1.75rem 0" }} />
);

const CaseStudy = ({ item, onClose }) => {
  const constraints = item.caseStudyData?.constraints ?? [];
  const approach    = item.caseStudyData?.approach    ?? [];
  const stats       = item.caseStudyData?.stats       ?? [];
  const takeaway    = item.caseStudyData?.takeaway    ?? "";
  const problemText = item.caseStudyData?.problemText ?? "";
  const outcome     = item.caseStudyData?.outcome     ?? [];

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      style={{
        background: BG,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)",
        position: "fixed",
        inset: 0,
        zIndex: 102,
        color: "#fff",
        fontFamily: "'Rubik', -apple-system, sans-serif",
        willChange: "opacity",
        pointerEvents: "auto",
      }}
    >
      {/* ── Left column ── */}
      <div style={{ display: "flex", flexDirection: "column", borderRight: `1px solid ${BORDER}`, overflow: "hidden" }}>

        {/* Hero image */}
        <div style={{
          flex: "0 0 52%",
          backgroundColor: BG,
          borderBottom: `1px solid ${BORDER}`,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}>
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                filter: "drop-shadow(0 0 12px rgba(255,255,255,0.18)) drop-shadow(0 2px 24px rgba(255,255,255,0.08))",
              }}
            />
          )}
        </div>

        {/* 2×2 stat grid */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}>
          {stats.map(([label, value], i) => (
            <div
              key={i}
              style={{
                padding: "1rem 1.2rem",
                borderRight:  i % 2 === 0 ? `1px solid ${BORDER}` : undefined,
                borderBottom: i < 2       ? `1px solid ${BORDER}` : undefined,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p style={{ margin: "0 0 0.4rem", fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
                {label}
              </p>
              <p style={{ margin: 0, fontSize: "1.25rem", fontWeight: 500, color: "#f5f5f7" }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right column (scrollable) ── */}
      <div style={{
        overflowY: "auto",
        minHeight: 0,
        padding: "2rem 2.25rem 2.5rem",
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(255,255,255,0.08) transparent",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.28 }}
        >
          {/* Header */}
          <Eyebrow>Case Study</Eyebrow>
          <h2 style={{ margin: "0 0 0.5rem", fontSize: "clamp(2rem, 3.2vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15, color: "#f5f5f7" }}>
            {item.title}
          </h2>
          <p style={{ margin: "0 0 1.1rem", fontSize: "1.1rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.6 }}>
            {item.subtitle}
          </p>
          <TagRow>
            {item.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </TagRow>

          <Divider />

          {/* Problem */}
          <div style={{ marginBottom: "1.75rem" }}>
            <Eyebrow>The Problem</Eyebrow>
            {problemText && (
              <p style={{ margin: "0 0 0.85rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(255,255,255,0.55)" }}>
                {problemText}
              </p>
            )}
            <p style={{ margin: 0, fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(255,255,255,0.42)" }}>
              {item.description}
            </p>
          </div>

          {/* Constraints */}
          {constraints.length > 0 && (
          <div style={{ marginBottom: "1.75rem" }}>
            <Eyebrow>Constraints</Eyebrow>
            <div style={{
              background: "rgba(255,255,255,0.025)",
              border: `1px solid ${BORDER}`,
              borderRadius: "0.75rem",
              overflow: "hidden",
            }}>
              {constraints.map(([title, desc], i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "110px 1fr",
                    gap: "0.5rem",
                    padding: "0.85rem 1.1rem",
                    borderBottom: i < constraints.length - 1 ? `1px solid ${BORDER}` : undefined,
                  }}
                >
                  <p style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                    {title}
                  </p>
                  <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.65, color: "rgba(255,255,255,0.42)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Approach */}
          {approach.length > 0 && (
          <div style={{ marginBottom: "1.75rem" }}>
            <Eyebrow>Approach</Eyebrow>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {approach.map(([title, desc], i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: `1px solid ${BORDER}`,
                    borderRadius: "0.65rem",
                    padding: "1rem 1.1rem",
                  }}
                >
                  <p style={{ margin: "0 0 0.35rem", fontSize: "1.05rem", fontWeight: 600, color: "#f5f5f7" }}>
                    {title}
                  </p>
                  <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.42)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Outcome */}
          {outcome.length > 0 && (
          <div style={{ marginBottom: "1.75rem" }}>
            <Eyebrow>Outcome</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {outcome.map(([title, desc], i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: "0.75rem", alignItems: "start" }}>
                  <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, paddingTop: 1 }}>
                    {title}
                  </p>
                  <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Takeaway */}
          {takeaway && (
          <div style={{ padding: "1.25rem 1.5rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.14)` }}>
            <Eyebrow>Takeaway</Eyebrow>
            <p style={{ margin: 0, fontSize: "1.2rem", lineHeight: 1.8, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
              {takeaway}
            </p>
          </div>
          )}
        </motion.div>
      </div>

      <CloseButton onClick={onClose} style={{ position: "fixed", top: "1.25rem", right: "1.25rem", zIndex: 5 }}>
        ✕
      </CloseButton>
    </motion.div>
  );
};

export { CaseStudy };
