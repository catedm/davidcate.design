import React from "react";
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
  const constraints = [
    ["No full rewrite", "The legacy system was too embedded in business logic to touch."],
    ["Divergent stacks", "ASP.NET on one side, React on the other — no shared primitives."],
    ["Limited legacy control", "Source changes were constrained by scope, access, and risk."],
    ["Zero tolerance for seams", "Users had no patience for any visible break in the experience."],
  ];

  const approach = [
    ["Invisible Boundaries", "Embedded via iframe — but every visual trace of the frame was eliminated. No scrollbars, no artifacts, no layout breaks."],
    ["Real-Time Communication", "postMessage bridged the two runtimes silently. Auth events, state, and navigation signals flowed without any user-visible latency."],
    ["Unified Navigation", "The React layer owned navigation entirely. The legacy app's own nav was suppressed and replaced with a single consistent surface."],
    ["Modal System Override", "Dialogs originating from the legacy layer were intercepted and re-rendered in React — on-brand and fully accessible."],
  ];

  return (
    <motion.div
      layoutId={`card-${item.id}`}
      transition={{ type: "spring", stiffness: 280, damping: 32 }}
      style={{
        background: BG,
        border: `1px solid ${BORDER}`,
        borderRadius: "1.25rem",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)",
        width: "min(1500px, 94vw)",
        height: "min(780px, 90vh)",
        color: "#fff",
        fontFamily: "'Rubik', -apple-system, sans-serif",
        position: "relative",
        flexShrink: 0,
        willChange: "transform",
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
          {[
            ["Stack",  "React + ASP.NET"],
            ["Bridge", "iframe + postMessage"],
            ["Scope",  "Full product integration"],
            ["Result", "Zero rewrite"],
          ].map(([label, value], i) => (
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
              <p style={{ margin: "0 0 0.3rem", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
                {label}
              </p>
              <p style={{ margin: 0, fontSize: "1rem", fontWeight: 500, color: "#f5f5f7" }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right column (scrollable) ── */}
      <div style={{
        overflowY: "auto",
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
          <h2 style={{ margin: "0 0 0.5rem", fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15, color: "#f5f5f7" }}>
            {item.title}
          </h2>
          <p style={{ margin: "0 0 1.1rem", fontSize: "0.95rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.6 }}>
            {item.subtitle}
          </p>
          <TagRow>
            {item.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </TagRow>

          <Divider />

          {/* Problem */}
          <div style={{ marginBottom: "1.75rem" }}>
            <Eyebrow>The Problem</Eyebrow>
            <p style={{ margin: "0 0 0.85rem", fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.55)" }}>
              The legacy app lived in isolation — opening it meant a new tab, snapping users out of the product context entirely. Navigation broke. Branding fractured. The seam between systems was impossible to miss.
            </p>
            <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.42)" }}>
              {item.description}
            </p>
          </div>

          {/* Constraints */}
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
                    gridTemplateColumns: "90px 1fr",
                    gap: "0.5rem",
                    padding: "0.85rem 1.1rem",
                    borderBottom: i < constraints.length - 1 ? `1px solid ${BORDER}` : undefined,
                  }}
                >
                  <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 600, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                    {title}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.65, color: "rgba(255,255,255,0.42)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Approach */}
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
                  <p style={{ margin: "0 0 0.35rem", fontSize: "0.92rem", fontWeight: 600, color: "#f5f5f7" }}>
                    {title}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.88rem", lineHeight: 1.7, color: "rgba(255,255,255,0.42)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div style={{ marginBottom: "1.75rem" }}>
            <Eyebrow>Outcome</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                ["One platform experience", "Users moved through both systems without any visible transition — the seam disappeared entirely."],
                ["Shipped without a rewrite", "Delivered on schedule with zero disruption to existing business logic or user workflows."],
                ["A repeatable pattern", "The approach became a documented, reusable template for future legacy surface integrations."],
              ].map(([title, desc], i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: "0.75rem", alignItems: "start" }}>
                  <p style={{ margin: 0, fontSize: "0.92rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, paddingTop: 1 }}>
                    {title}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.93rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Takeaway */}
          <div style={{ padding: "1.1rem 1.25rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.025)", border: `1px solid ${BORDER}` }}>
            <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>
              "Great interfaces hide complexity — even when the systems behind them are fragmented."
            </p>
          </div>
        </motion.div>
      </div>

      <CloseButton onClick={onClose} style={{ position: "absolute", top: "1rem", right: "1rem", zIndex: 5 }}>
        ✕
      </CloseButton>
    </motion.div>
  );
};

export { CaseStudy };
