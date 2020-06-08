import React from "react";
import { ResumeContainer } from "../styles";

const Resume = ({ setResumeLayout }) => {
  return (
    <div>
      <button onClick={() => setResumeLayout(false)}>Close me</button>
      <ResumeContainer>
        <div className="general"></div>
        <div className="eductation"></div>
        <div className="appnet"></div>
        <div className="e-360"></div>
        <div className="flexera"></div>
        <div className="risc"></div>
      </ResumeContainer>
    </div>
  );
};

export { Resume };
