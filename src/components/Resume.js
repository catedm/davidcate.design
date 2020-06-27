import * as React from "react";
import { motion } from "framer-motion";
import { ResumeContainer, Item } from "../styles";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const Resume = () => (
  <ResumeContainer variants={container} initial="hidden" animate="visible">
    <Item variants={item}>Education</Item>
    <Item variants={item}>Skillsddd:</Item>
  </ResumeContainer>
);
