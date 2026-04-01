import React from "react";
import { Card as CardFace, Icons } from "../styles";
import { TiltWrapper } from "./TiltWrapper";

const Card = ({ vantaEffect, setResumeLayout, resumeLayout, hideContent }) => {
  return (
    <>
        <CardFace vantaEffect={vantaEffect}>
        <h1>David Cate</h1>
        <h2>Front End Developer</h2>
        <p>React // Typescript</p>
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
          <a
            href="https://levelup.gitconnected.com/@david_cate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={"fab fa-medium"} />
          </a>
        </Icons>
        <p>
          Current Employer:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.flexera.com/"
          >
            Flexera
          </a>
        </p>
        <p onClick={() => setResumeLayout(true)} style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '2rem', cursor: 'pointer' }}>
            RESUME
        </p>
        </CardFace>
    </>
  );
};

export { Card };
