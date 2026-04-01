import React from "react";
import { motion } from "framer-motion";
import { ResumeContainer, Item } from "../styles";

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
      <ResumeContainer variants={container} initial="hidden" animate="visible" exit="exit">
        <Item col="left" variants={itemVariant}>
          <h1>Education</h1>
          <h2>Appalachian State University</h2>
          <p>BS: Graphic Arts &amp; Imaging Technology</p>
          <p>Minor: General Business</p>
        </Item>
        <Item variants={itemVariant}>
          <h1>Experience</h1>
          <h3>Web Designer &amp; Front End Developer</h3>
          <p className="small">Appnet New Media Studio, Boone NC</p>
          <p className="small">May 2015 - April 2016</p>
          <h3>Internet Marketing Programmer</h3>
          <p className="small">Element-360, Asheville NC</p>
          <p className="small">April 2016 – April 2019</p>
          <h3>Software Development Engineer</h3>
          <p className="small">Flexera, Asheville NC</p>
          <p className="small">April 2019 - Present</p>
        </Item>
        <Item col="left" variants={itemVariant}>
          <h1>References</h1>
          <h3>Mike Doble - Owner, Appnet</h3>
          <p className="small">mike@appnet.com</p>
          <p className="small">888.926.4584</p>
          <h3>Chad Martin - Owner, Element-360</h3>
          <p className="small">chad@element-360.com</p>
          <p className="small">775.770.4450</p>
          <h3>Dr. Jonas Goldstein - Interventional Radiologist</h3>
          <p className="small">jonas.goldstein@msj.com</p>
          <p className="small">775.770.4450</p>
        </Item>
        <Item variants={itemVariant}>
          <h1>Skills</h1>
          <p className="skill">Front End Development</p>
          <p className="skill">React // Redux</p>
          <p className="skill">Javascript // Typescript</p>
          <p className="skill">HTML &amp; CSS</p>
          <p className="skill">Styled Components</p>
          <p className="skill">Jest // Enzyme // Cypress</p>
          <p className="skill">GIT // Travis-CI</p>
          <p className="skill">AWS</p>
        </Item>
      </ResumeContainer>
    </div>
  );
};

