import React, { useEffect, useState } from "react";
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

const variants = {
  hide: { y: 20, opacity: 0 }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


export const Resume = ({ setResumeLayout }) => {

  const [hide, setHide] = useState(false);

  // useEffect(() => {
  //   document.body.addEventListener('click', () => {
  //     setResumeLayout(false)
  //   });
  // }, []);

  return (
    <ResumeContainer variants={container} initial="hidden" animate="visible">
      <Item col={'left'} variants={item} initial="hidden">
        <h1>Education</h1>
        <h2>Appalachian State University</h2>
        <p>BS: Graphic Arts & Imaging Technology</p>
        <p>Minor: General Business</p>
      </Item>
      <Item variants={item} onClick={() => setHide(true)}>
        <h1>Experience</h1>
        <h2>Web Designer & Front End Developer</h2>
        <h2>Internet Marketing Programmer</h2>
        <h2>Software Development Engineer</h2>
      </Item>
      <Item col={'left'} variants={item}>
        <h2>Appnet New Media Studio, Boone NC</h2>
        <p>BS: Graphic Arts & Imaging Technology</p>
        <p>Minor: General Business</p>
      </Item>
      <Item variants={item}>
        <h1>Skills</h1>
        <p>Front End Development / React / Redux/ JS / Styled Components / Typescript / Cypress / jQuery / Travis-CI / AWS / CSS3 /
          HTML5 / Git</p>
      </Item>
    </ResumeContainer>
  )
};
