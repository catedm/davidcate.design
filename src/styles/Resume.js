import styled from "styled-components";
import {animated} from "react-spring";

export const ResumeWrapper = styled(animated.div)`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100vh;
`;

export const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
  grid-template-areas: "general general eductation eductation" "appnet appnet e-360 e-360" "risc risc flexera flexera";
  justify-items: center;
  background: url("http://unsplash.it/1200x800") center center no-repeat;
  background-size: cover;
  margin: 3rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right, #002f4b, #dc4225);
    z-index: -1;
  }

  div {
    border: 2px solid #fff;
    width: 100%;
    height: 250px;
  }

  .general {
    grid-area: general;
  }

  .eductation {
    grid-area: eductation;
  }

  .appnet {
    grid-area: appnet;
  }

  .e-360 {
    grid-area: e-360;
  }

  .flexera {
    grid-area: flexera;
  }

  .risc {
    grid-area: risc;
  }
`;
