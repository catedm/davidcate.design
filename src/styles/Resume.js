import styled from "styled-components";
import {animated} from "react-spring";

export const ResumeWrapper = styled(animated.div)`
  z-index: 1;
  width: 100vw;
  display: none;
`;

export const ResumeContainer = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
  grid-template-areas: "general general eductation eductation" "appnet appnet e-360 e-360" "risc risc flexera flexera";
  justify-items: center;
  margin: 3rem;

  div {
    width: 100%;
    padding: 2rem;
  }

  .general {
    grid-area: general;
    border-top-left-radius: 10px;
  }

  .eductation {
    grid-area: eductation;
    border-top-right-radius: 10px;
  }

  .appnet {
    grid-area: appnet;
  }

  .e-360 {
    grid-area: e-360;
  }

  .flexera {
    grid-area: flexera;
    border-bottom-right-radius: 10px;
  }

  .risc {
    grid-area: risc;
    border-bottom-left-radius: 10px;
  }
`;
