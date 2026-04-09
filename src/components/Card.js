import React from "react";
import { Card as CardFace, Icons, Button, ButtonGroup } from "../styles";

const Card = ({ vantaEffect, setResumeLayout, setPortfolioLayout }) => {
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
        </CardFace>
    </>
  );
};

export { Card };
