import React from "react";
import { motion } from "framer-motion";
import {
  ResumeGrid,
  ResumeCard,
  CardEyebrow,
  EduSchool,
  EduDegree,
  EduMinor,
  Timeline,
  TimelineEntry,
  DateRange,
  RoleBlock,
  RoleTitle,
  RoleCompany,
  RoleBullets,
  SkillsGrid,
  SkillGroup,
  SkillGroupLabel,
  SkillTags,
  SkillTag,
} from "../styles";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.15 } },
};

const experience = [
  {
    dateRange: "Feb 2023\n— present",
    title: "Senior Software Engineer",
    company: "Smartsheet",
    location: "Bellevue, WA",
    current: true,
    bullets: [
      "Led frontend development for Scenario Planning — forecasting, timeline visualization, and decision-making at enterprise scale",
      "Built advanced filtering and drill-down for Capacity View, enabling allocation analysis across roles, disciplines, and custom fields",
      "Embedded on OAuth identity team to deliver a scalable, secure login system with reusable auth UI patterns and IDP integrations",
      "Led AI scenario generation research, evaluating LLM-based and deterministic approaches and documenting architectural tradeoffs",
    ],
  },
  {
    dateRange: "Mar 2021\n— Jan 2024",
    title: "Technical Co-Founder",
    company: "Copy and Post",
    location: "Asheville, NC",
    current: false,
    bullets: [
      "Built a full-stack social content platform end-to-end with React, TypeScript, and GraphQL",
      "Designed a serverless scheduling system (AWS Lambda + Aurora) publishing hundreds of posts per week across major platforms",
    ],
  },
  {
    dateRange: "Apr 2019\n— Feb 2023",
    title: "Senior Software Engineer",
    company: "Flexera",
    location: "Itasca, IL",
    current: false,
    bullets: [
      "Integrated legacy flagship product into Flexera One under tight timelines, maintaining cohesive cross-product UX",
      "Built and documented internal component library consumed across multiple product lines",
      "Wired frontend auth flows to Azure AD and Okta; validated token handling and session workflows with E2E tests",
    ],
  },
  {
    dateRange: "Jan 2016\n— Apr 2019",
    title: "Internet Marketing Programmer",
    company: "Element-360",
    location: "Asheville, NC",
    current: false,
    bullets: [
      "Built and maintained production web experiences; delivered performant, conversion-focused solutions",
    ],
  },
];

const skills = [
  {
    label: "Core languages & frameworks",
    accent: "purple",
    tags: ["React", "TypeScript", "JavaScript", "Next.js", "GraphQL", "Redux", "React Native"],
  },
  {
    label: "Architecture & systems",
    accent: "teal",
    tags: ["Frontend Architecture", "Scalable UI Systems", "Component Library Design", "Real-Time Data Flows", "Serverless Architecture", "API Integration", "Data Visualization"],
  },
  {
    label: "Auth & security",
    accent: "amber",
    tags: ["OAuth 2.0", "Azure AD", "Okta", "Identity Provider Integration", "Session Management", "Secure Login Systems"],
  },
  {
    label: "Cloud, testing & tooling",
    accent: "neutral",
    tags: ["AWS Lambda", "Aurora/RDS", "S3", "Vercel", "Playwright", "Jest", "Storybook", "Git"],
  },
];

export const Resume = ({ setResumeLayout }) => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ alignSelf: "flex-start", padding: "1rem 2rem 0" }}
      >
        <button
          onClick={() => setResumeLayout(false)}
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
      <ResumeGrid variants={container} initial="hidden" animate="visible" exit="exit">
        {/* Education */}
        <ResumeCard variants={itemVariant} area="edu">
          <CardEyebrow>Education</CardEyebrow>
          <EduSchool>Appalachian State University</EduSchool>
          <EduDegree>BS, Graphic Arts &amp; Imaging Technology</EduDegree>
          <EduMinor>Minor: General Business</EduMinor>
        </ResumeCard>

        {/* Experience */}
        <ResumeCard variants={itemVariant} area="exp">
          <CardEyebrow>Experience</CardEyebrow>
          <Timeline>
            {experience.map((role, i) => (
              <TimelineEntry key={i}>
                <DateRange>{role.dateRange}</DateRange>
                <RoleBlock>
                  <RoleTitle>
                    {role.current && <span className="dot" />}
                    {role.title}
                  </RoleTitle>
                  <RoleCompany>{role.company} · {role.location}</RoleCompany>
                  <RoleBullets>
                    {role.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </RoleBullets>
                </RoleBlock>
              </TimelineEntry>
            ))}
          </Timeline>
        </ResumeCard>

        {/* Skills */}
        <ResumeCard variants={itemVariant} area="skills">
          <CardEyebrow>Skills</CardEyebrow>
          <SkillsGrid>
            {skills.map((group, i) => (
              <SkillGroup key={i}>
                <SkillGroupLabel>{group.label}</SkillGroupLabel>
                <SkillTags>
                  {group.tags.map((tag, j) => (
                    <SkillTag key={j} accent={group.accent}>{tag}</SkillTag>
                  ))}
                </SkillTags>
              </SkillGroup>
            ))}
          </SkillsGrid>
        </ResumeCard>
      </ResumeGrid>
    </div>
  );
};

