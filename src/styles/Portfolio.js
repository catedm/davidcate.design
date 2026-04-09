import styled from "styled-components";
import { motion } from "framer-motion";

export const PortfolioOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const PortfolioScrim = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 99;
  cursor: pointer;
`;

export const PortfolioGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
  padding: 1.5rem 2rem 2rem;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 710px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 140px;
    padding: 1rem;
  }
`;

export const SectionTitle = styled(motion.h2)`
  color: #fff;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0 2rem;
  margin: 2rem 0 0.75rem;
  opacity: 0.7;
`;

export const GridCell = styled(motion.div)`
  border-radius: 1rem;
  background-color: ${(p) => p.bg || "#222"};
  background-image: ${(p) => (p.img ? `url(${p.img})` : "none")};
  background-size: cover;
  background-position: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem;
  color: #fff;
  will-change: transform;
  grid-column: span ${(p) => p.colSpan || 6};
  grid-row: span 2;

  @media (max-width: 710px) {
    grid-column: span 12;
    grid-row: span 1;
  }
`;

export const GridCellInner = styled.div`
  position: relative;
  z-index: 1;
`;

export const GridCellGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.75) 0%,
    transparent 60%
  );
  border-radius: inherit;
`;

export const GridCellSubtitle = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.7;
  margin: 0 0 0.25rem;
`;

export const GridCellTitle = styled.h2`
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  font-weight: 700;
  font-style: normal;
  margin: 0;
  line-height: 1.15;
  color: #fff;
  text-shadow:
    0 0 8px rgba(0, 0, 0, 1),
    0 1px 4px rgba(0, 0, 0, 1),
    0 2px 12px rgba(0, 0, 0, 0.95),
    0 4px 24px rgba(0, 0, 0, 0.9);
`;

export const ExpandedCard = styled(motion.div)`
  background-color: ${(p) => p.bg || "#111"};
  background-image: ${(p) => (p.img ? `url(${p.img})` : "none")};
  background-size: cover;
  background-position: center;
  border-radius: 1.25rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: min(620px, 90vw);
  height: min(700px, 85vh);
  color: #fff;
  flex-shrink: 0;
  will-change: transform;
`;

export const ExpandedHero = styled(motion.div)`
  background-color: ${(p) => p.bg || "#222"};
  background-image: ${(p) => (p.img ? `url(${p.img})` : "none")};
  background-size: cover;
  background-position: center;
  height: 260px;
  position: relative;
  flex-shrink: 0;
`;

export const ExpandedHeroGradient = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.98) 35%,
    rgba(0, 0, 0, 0.8) 55%,
    rgba(0, 0, 0, 0.35) 75%,
    transparent 100%
  );
`;

export const ExpandedHeroText = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.75rem;
  z-index: 1;
`;

export const ExpandedBody = styled.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ExpandedDescription = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  opacity: 0.85;
  margin: 0;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.78rem;
  font-weight: 500;
  opacity: 0.8;
`;

export const ExpandedLink = styled.a`
  display: inline-block;
  background: #fff;
  color: #000;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  text-decoration: none;
  align-self: flex-start;
  transition: opacity 0.15s;
  &:hover { opacity: 0.8; }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  &:hover { background: rgba(0,0,0,0.75); }
`;
