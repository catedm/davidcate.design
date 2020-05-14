import React, { useState } from "react";
import { useSpring } from "react-spring";
import { CardWrapper as StyledCard, Card as CardFace, Icons } from "../styles";

const Card = () => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <>
      <StyledCard onClick={() => set(state => !state)}>
        <CardFace
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
        >
          <h1>David Cate</h1>
          <h2>Front End Developer</h2>
          <Icons>
            <a href="https://www.linkedin.com/in/david-cate-73363b84/">
              <i className={"fab fa-linkedin"} />
            </a>
            <i className={"fab fa-github"} />
            <i className={"fab fa-medium"} />
          </Icons>
        </CardFace>
        <CardFace
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`)
          }}
        >
          <h2>React / Redux / Typescript / Nodejs / </h2>
        </CardFace>
      </StyledCard>
      <a style={{ color: "white", position: 'absolute', top: '10px' }} onClick={() => console.log("test")}>
        TEST
      </a>
    </>
  );
};

export { Card };
