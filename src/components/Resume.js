import React, { useEffect, useState } from "react";
import { ResumeContainer, Item } from "../styles";

const container = {
  hidden: {
    opacity: 1,
    scale: 0,
    transition: {
      delay: 0.6
    }
  },
  visible: {
    opacity: 1,
    scale: 1
  }
};

const variants = {
  hide: { y: 20, opacity: 0 }
}

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1
//   }
// };


// leaving this if i decide to do more later with animations
const education = {
  hidden: {
    transition: {
      delay: 0.4
    },
    y: 20, opacity: 0
  },
  visible: {
    transition: {
      delay: 0.3,
    },
    y: 0,
    opacity: 1
  }
};

const experience = {
  hidden: {
    transition: {
      delay: 0.3,
    },
    y: 20, opacity: 0
  },
  visible: {
    transition: {
      delay: 0.4,
    },
    y: 0,
    opacity: 1
  }
};

const references = {
  hidden: {
    transition: {
      delay: 0.2,
    },
    y: 20, opacity: 0
  },
  visible: {
    transition: {
      delay: 0.5,
    },
    y: 0,
    opacity: 1
  }
};

const skills = {
  hidden: {
    transition: {
      delay: 0.1,
    },
    y: 20, opacity: 0
  },
  visible: {
    transition: {
      delay: 0.6,
    },
    y: 0,
    opacity: 1
  }
};

export const Resume = ({ setResumeLayout }) => {

  const [hide, setHide] = useState(false);

  const closeResumeCallback = () => {
    setHide(true)
    setTimeout(() => {
      setResumeLayout(false)
    }, 1000);}

  useEffect(() => {
    document.body.addEventListener('click', closeResumeCallback)

    return () => {
      document.body.removeEventListener('click', closeResumeCallback);
    }
  }, []);

  return (
    <ResumeContainer variants={container}  animate={hide ? 'hidden' : 'visible'} initial="hidden">
      <Item col={'left'} variants={education} animate={hide ? 'hidden' : 'visible'} initial="hidden">
        <h1>Education</h1>
        <h2>Appalachian State University</h2>
        <p>BS: Graphic Arts & Imaging Technology</p>
        <p>Minor: General Business</p>
      </Item>
      <Item variants={experience} animate={hide ? 'hidden' : 'visible'}>
        <h1>Experience</h1>
        <h2>Web Designer & Front End Developer</h2>
        <h2>Internet Marketing Programmer</h2>
        <h2>Software Development Engineer</h2>
      </Item>
      <Item col={'left'} variants={references} animate={hide ? 'hidden' : 'visible'}>
        <h2>Appnet New Media Studio, Boone NC</h2>
        <p>BS: Graphic Arts & Imaging Technology</p>
        <p>Minor: General Business</p>
      </Item>
      <Item variants={skills} animate={hide ? 'hidden' : 'visible'}>
        <h1>Skills</h1>
        <p>Front End Development / React / Redux/ JS / Styled Components / Typescript / Cypress / jQuery / Travis-CI / AWS / CSS3 /
          HTML5 / Git</p>
      </Item>
    </ResumeContainer>
  )
};
