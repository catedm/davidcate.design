import React, { useEffect, useRef } from "react";
import { config, useSpring, animated } from "react-spring";
import { ResumeContainer, ResumeWrapper } from "../styles";

const Resume = ({ setResumeLayout, showContent }) => {
  const wrapper = useRef(null);
  const general = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000
  });
  const appnet = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1300
  });
  const e360 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1100
  });
  const risc = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1600
  });
  const flexera = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1700
  });
  const education = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1800
  });

  useEffect(() => {
    setTimeout(() => {
      wrapper.current.style.display = "block";
    }, 600);
  }, []);

  return (
    <ResumeWrapper ref={wrapper}>
      <button
        onClick={() => {
          showContent();
          setResumeLayout(false);
        }}
      >
        Close me
      </button>
      <ResumeContainer>
        <animated.div style={general} className="general">
          <h1>David Cate</h1>
          <p>
            <a href="mailto:catedavid0404@gmail.com">catedavid0404@gmail.com</a>
          </p>
          <p>111 East Charleston Ave, Swannanoa NC 28778</p>
        </animated.div>
        <animated.div style={education} className="eductation">
          <h1>Education</h1>
          <p>Bachelor of Science: Graphic Arts & Imaging Technology</p>
        </animated.div>
        <animated.div style={appnet} className="appnet">appnet</animated.div>
        <animated.div style={e360} className="e-360">e-360</animated.div>
        <animated.div style={flexera} className="flexera">flexera</animated.div>
        <animated.div style={risc} className="risc">
          risc
        </animated.div>
      </ResumeContainer>
    </ResumeWrapper>
  );
};

export { Resume };
