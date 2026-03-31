import styled from "styled-components";
import home2 from "../assets/home.jpg";
import { motion } from "framer-motion";

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

export const FlexWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem;

  @media (max-width: 710px) {
    flex-direction: column-reverse;
  }
`;

const BaseRightCol = styled(motion.div)`
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

export const LeftCol = styled(motion.div)`
  @media (max-width: 710px) {
    width: 100%;
  }
`;

export const ControlPanelWrapper = styled(motion.div)`
  overflow: hidden;
  flex-shrink: 0;
  align-self: flex-start;
`;

export const ContentWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  gap: 1rem;
  
  @media (max-width: 710px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const PanelWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  max-width: 100vw;
  
  @media (max-width: 710px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
