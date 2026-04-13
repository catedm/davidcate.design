import React from "react";
import { Card as CardFace, Icons, Button, ButtonGroup } from "../styles";

const Card = ({ vantaEffect, setResumeLayout, setPortfolioLayout, onOpenCaseStudy }) => {
  return (
    <>
        <CardFace vantaEffect={vantaEffect}>
        <h1>David Cate</h1>
        <h2>Senior Frontend Engineer </h2>
        <p>10 years building enterprise-scale interfaces — <br />
data-heavy systems, auth platforms, and design systems.</p>
        <Icons vantaEffect={vantaEffect}>
          <a
            href="https://www.linkedin.com/in/david-cate-73363b84/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={"fab fa-linkedin"} />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://github.com/catedm"
            target="_blank"
          >
            <i className={"fab fa-github"} />
          </a>
          {/* <a
            href="https://levelup.gitconnected.com/@david_cate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={"fab fa-medium"} />
          </a> */}
        </Icons>
        <p>
          Current Employer:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.smartsheet.com/"
          >
            Smartsheet
          </a>
        </p>
        <ButtonGroup>
          <Button vantaEffect={vantaEffect} onClick={() => setResumeLayout(true)}>
            <span>Resume</span>
          </Button>
          <Button vantaEffect={vantaEffect} onClick={() => setPortfolioLayout(true)}>
            <span>Portfolio</span>
          </Button>
        </ButtonGroup>
        {onOpenCaseStudy && (
          <button
            onClick={onOpenCaseStudy}
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "2rem",
              right: "2rem",
              background: "none",
              border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: "0.65rem",
              padding: "0.75rem 1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#fff",
              fontSize: "1.5rem",
              fontFamily: "'Rubik', sans-serif",
              letterSpacing: "0.02em",
              transition: "background 0.18s, border-color 0.18s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.65)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; }}
          >
            <span style={{ fontSize: "1rem" }}>▶</span>
            <span><strong style={{ fontWeight: 600 }}>Latest Case Study:</strong> Scenario Planning Filters</span>
          </button>
        )}
        </CardFace>
    </>
  );
};

export { Card };
