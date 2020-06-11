import React from "react";
import { ResumeContainer } from "../styles";
import ReactDelayRender from 'react-delay-render';

const Resume = ({ setResumeLayout }) => {
  return (
    <div>
      <button onClick={() => setResumeLayout(false)}>Close me</button>
      <ResumeContainer>
        <div className="general">HELLo</div>
        <div className="eductation"></div>
        <div className="appnet"></div>
        <div className="e-360"></div>
        <div className="flexera"></div>
        <div className="risc"></div>
      </ResumeContainer>
    </div>
  );
};

export default ReactDelayRender({ delay: 600 })(Resume);
