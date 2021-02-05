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

// const variants = {
//   hide: { y: 20, opacity: 0 }
// }

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
  });

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
        <h3>Web Designer & Front End Developer</h3>
        <p className={'small'}>Appnet New Media Studio, Boone NC</p>
        <p className={'small'}>May 2015 - April 2016</p>
        <h3>Internet Marketing Programmer</h3>
        <p className={'small'}>Element-360, Asheville NC</p>
        <p className={'small'}>April 2016 – April 2019</p>
        <h3>Software Development Engineer</h3>
        <p className={'small'}>Flexera, Asheville NC</p>
        <p className={'small'}>April 2019 - Present</p>
      </Item>
      <Item col={'left'} variants={references} animate={hide ? 'hidden' : 'visible'}>
        <h1>References</h1>
        <h3>Mike Doble - Owner, Appnet</h3>
        <p className={'small'}>mike@appnet.com</p>
        <p className={'small'}>888.926.4584</p>
        <h3>Chad Martin - Owner, Element-360</h3>
        <p className={'small'}>chad@element-360.com</p>
        <p className={'small'}>775.770.4450</p>
        <h3>Dr. Jonas Goldstein - Interventional Radiologist</h3>
        <p className={'small'}>jonas.goldstein@msj.com</p>
        <p className={'small'}>775.770.4450</p>
      </Item>
      <Item variants={skills} animate={hide ? 'hidden' : 'visible'}>
        <h1>Skills</h1>
        <p className={'skill'}>Front End Development</p>
        <p className={'skill'}>React // Redux</p>
        <p className={'skill'}>Javascript // Typescript</p>
        <p className={'skill'}>HTML & CSS</p>
        <p className={'skill'}>Styled Components</p>
        <p className={'skill'}>Jest // Enzyme // Cypress</p>
        <p className={'skill'}>GIT // Travis-CI</p>
        <p className={'skill'}>AWS</p>
      </Item>
    </ResumeContainer>
  )
};

// / React / Redux/ JS / Styled Components / Typescript / Cypress / jQuery / Travis-CI / AWS / CSS3 /
// HTML5 / Git
