import React from "react";
import { Card as CardFace, Icons } from "../styles";

const Card = ({ vantaEffect, setResumeLayout, resumeLayout, hideContent }) => {
  return (
    <>
      <CardFace vantaEffect={vantaEffect}>
        <h1>David Cate</h1>
        <h2>Full stack engineer</h2>
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
            href="https://www.smartsheet.com/"
          >
            Smartsheet
          </a>
        </p>
        <p onClick={() => setResumeLayout(true)} style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '2rem', cursor: 'pointer' }}>
            RESUME
        </p>
        <p>
        Startup-ready software, built for equity — not invoices.
        </p>
        <p>
        I'm a senior engineer who partners with non-technical founders to bring ideas to life. You focus on users and growth — I'll handle the code and product.
        </p>
      </CardFace>
    </>
  );
};

export { Card };
