import styled from "styled-components";
import home2 from "../assets/home.jpg";

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

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 1rem;
`;

const BaseRightCol = styled.div`
  border: 2px solid #fff;
  background: url(${home2});
  background-size: cover;
  background-position: center;
  width: 26%;
  height: 650px;
  margin-right: 1rem;
  border-radius: 1rem;
`;

export const RightCol = styled(BaseRightCol)`
  border-radius: 1rem;
  border: ${props => props.vantaEffect && getBorder(props.vantaEffect.name)};
`;

export const LeftCol = styled.div`
  box-sizing: border-box;
  height: 650px;
`;
