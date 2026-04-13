import styled from "styled-components";

const getStyles = currentEffect => {
  // eslint-disable-next-line default-case
  switch (currentEffect) {
    case "NET":
      return `
        border: 2px solid #FFF;
        color: #FFF;
      `;
    case "Halo":
      return `
        border: 2px solid #FF4389;
        color: #FFF;
      `;
    case "Waves":
      return `
        border: 2px solid #FFF;
        color: #FFF;
      `;
    case "CELLS":
      return `
        border: 2px solid #222326;
        color: #222326;
        
        h1 {
          border-bottom: 1px solid #222326;
        }
        
        a {
          color: #222326;
        }
      `;
    case "Topology":
      return `
        border: 2px solid #222326;
        color: #222326;
        
        h1 {
          border-bottom: 1px solid #222326;
        }
        
        a {
          color: #222326;
        }
      `;
  }
};

const BaseCard = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  border-top-left-radius: 0;
  height: 575px;
  border: 2px solid #fff;
  color: #fff;
  position: relative;

  @media (max-width: 710px) {
    height: auto;
  }
`;

export const Card = styled(BaseCard)`
  ${props => props.vantaEffect && getStyles(props.vantaEffect.name)}
`;

const getIconColor = currentEffect => {
  // eslint-disable-next-line default-case
  switch (currentEffect) {
    case "NET":
      return `
        color: #FFF;
      `;
    case "Halo":
      return `
        color: #FFF;
      `;
    case "Waves":
      return `
        color: #FFF;
      `;
    case "CELLS":
      return `
        color: #222326;
      `;
    case "Topology":
      return `
        color: #222326;
      `;
  }
};

const BaseIcon = styled.div`
  display: flex;
  font-size: 2rem;

  i {
    margin-right: 2rem;
  }
`;

export const Icons = styled(BaseIcon)`
  a {
    ${props => props.vantaEffect && getIconColor(props.vantaEffect.name)};
  }
`;
