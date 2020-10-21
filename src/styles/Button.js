import styled from "styled-components";

const getStyles = currentEffect => {
  // eslint-disable-next-line default-case
  switch (currentEffect) {
    case "NET":
      return `
        background: transparent;
        border: 2px solid #FFF;
        
        &:hover {
          background: #FFF;
          opacity: 0.9;
          border: 2px solid #FF4389;

        span {
          color: #222326;
          }
        }
        span {
          color: #FFF;
          }
      `;
    case "Halo":
      return `
        background: transparent;
        border: 2px solid #FF4389;
        
        &:hover {
          background: #FFF;

        span {
          color: #FF4389;
          }
        }
        span {
          color: #FFF;
          }
      `;
    case "Waves":
      return `
        background: transparent;
        border: 2px solid #FFF;
        
        &:hover {
          background: #FFF;
          border: 2px solid #5A0000;
          
        span {
            color: #5A0000;
          }
        }
        span {
          color: #FFF;
          }
      `;
    case "Topology":
      return `
        background: transparent;
        border: 2px solid #222326;
        
        &:hover {
          background: #222326;

        span {
          color: #FFF;
          }
        }
        span {
          color: #222326;
          }
      `;
    case "DOTS":
      return `
        background: transparent;
        border: 2px solid #FFF;
        
        &:hover {
          background: #222326;

        span {
          color: #FFF;
          }
        }
        span {
          color: #FFF;
          }
      `;
    case "CELLS":
      return `
        background: transparent;
        border: 2px solid #222326;
        
        &:hover {
          background: #222326;

        span {
          color: #FFF;
          }
        }
        span {
          color: #222326;
          }
      `;
  }
};

const BaseButton = styled.button`
  background: transparent;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 180px;
  height: 60px;
  cursor: pointer;
  border: 1px solid #fff;
  outline: none;
  transition: 0.4s ease-in-out;

  &:hover {
    transition: 0.4s ease-in-out;

    span {
      transition: 0.4s ease-in-out;
    }
  }

  &:hover svg {
    stroke-dashoffset: -480;
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  span {
    color: #fff;
    font-family: "Rubik", sans-serif;
    transition: 0.4s ease-in-out;
    font-size: 19px;
  }
`;

export const Button = styled(BaseButton)`
  ${props => props.vantaEffect && getStyles(props.vantaEffect.name)}
`;

export const ButtonContainer = styled.div`
  width: 180px;
`;
