import styled from "styled-components";
import home2 from "../assets/home.jpg";
import { animated } from "react-spring";

const getBorder = currentEffect => {
  switch (currentEffect) {
    case "NET":
      return "2px solid #FFF";
    case "Halo":
      return "2px solid #FF4389";
    case "Waves":
      return "2px solid #FFF";
    case "Topology":
      return "2px solid #222326";
    case "DOTS":
      return "2px solid #FFF";
    case "CELLS":
      return "2px solid #222326";
    default:
      return "2px solid #222326";
  }
};

export const FlexWrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 1rem;

  @media (max-width: 710px) {
    flex-direction: column-reverse;
  }
`;

export const ResumeWrapper = styled(animated.div)`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100vh;
`;

const BaseRightCol = styled.div`
  border: 2px solid #fff;
  background: url(${home2});
  background-size: cover;
  background-position: center;
  width: 370px;
  height: 650px;
  margin-right: 1rem;
  border-radius: 1rem;

  @media (max-width: 710px) {
    margin-right: 0;
    margin-top: 1rem;
    height: 350px;
    width: 100%;
  }
`;

export const RightCol = styled(BaseRightCol)`
  border-radius: 1rem;
  border: ${props => props.vantaEffect && getBorder(props.vantaEffect.name)};
`;

export const LeftCol = styled.div`
  @media (max-width: 710px) {
    width: 100%;
  }
`;
