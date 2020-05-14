import styled from "styled-components";
import { animated } from "react-spring";

export const CardWrapper = styled.div`
`;

export const Card = styled(animated.div)`
  padding: 2rem;
  color: white;
  border: 2px solid white;
  position: absolute;
  justify-content: flex-start;
  border-radius: 1rem;
  width: 50%;
  height: 260px;
  cursor: pointer;
  will-change: transform, opacity;
`;

export const Icons = styled.div`
  display: flex;
  font-size: 2rem;
  a {
    color: white;
  }
  i {
    margin-right: 2rem;
  }
`;
