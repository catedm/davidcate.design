import styled from "styled-components";
import { motion } from "framer-motion";

const CARD_BG = "#161616";
const CARD_BORDER = "rgba(255,255,255,0.08)";
const CARD_RADIUS = "14px";

export const ResumeGrid = styled(motion.div)`
  width: 72vw;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "edu exp"
    "skills exp";
  gap: 12px;
  padding: 16px 16px 24px;

  @media (max-width: 1300px) {
    width: 92vw;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "edu"
      "exp"
      "skills";
  }
`;

export const ResumeCard = styled(motion.div)`
  background: ${CARD_BG};
  border: 1px solid ${CARD_BORDER};
  border-radius: ${CARD_RADIUS};
  padding: 1.5rem;
  grid-area: ${props => props.area};
`;

export const CardEyebrow = styled.p`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  margin: 0 0 1rem;
`;

export const EduSchool = styled.h2`
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.4rem;
`;

export const EduDegree = styled.p`
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  margin: 0 0 0.25rem;
`;

export const EduMinor = styled.p`
  font-size: 14px;
  color: rgba(255,255,255,0.4);
  margin: 0;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const TimelineEntry = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const DateRange = styled.p`
  font-size: 13px;
  color: rgba(255,255,255,0.35);
  margin: 0;
  padding-top: 2px;
  white-space: pre-line;
  line-height: 1.55;
`;

export const RoleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const RoleTitle = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4ade80;
    flex-shrink: 0;
  }
`;

export const RoleCompany = styled.p`
  font-size: 14px;
  color: rgba(255,255,255,0.45);
  margin: 0 0 0.35rem;
`;

export const RoleBullets = styled.ul`
  margin: 0;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  li {
    font-size: 13px;
    color: rgba(255,255,255,0.55);
    line-height: 1.55;
  }
`;

const accentMap = {
  purple:  { bg: "rgba(139,92,246,0.15)",   border: "rgba(139,92,246,0.35)",   color: "rgba(196,181,253,0.9)" },
  teal:    { bg: "rgba(20,184,166,0.12)",   border: "rgba(20,184,166,0.3)",    color: "rgba(153,246,228,0.9)" },
  amber:   { bg: "rgba(245,158,11,0.12)",   border: "rgba(245,158,11,0.3)",    color: "rgba(253,230,138,0.9)" },
  neutral: { bg: "rgba(255,255,255,0.06)",  border: "rgba(255,255,255,0.14)",  color: "rgba(255,255,255,0.6)" },
};

export const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SkillGroupLabel = styled.p`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  margin: 0;
`;

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const SkillTag = styled.span`
  font-size: 12px;
  padding: 4px 11px;
  border-radius: 999px;
  background: ${props => (accentMap[props.accent] ?? accentMap.neutral).bg};
  border: 1px solid ${props => (accentMap[props.accent] ?? accentMap.neutral).border};
  color: ${props => (accentMap[props.accent] ?? accentMap.neutral).color};
`;
