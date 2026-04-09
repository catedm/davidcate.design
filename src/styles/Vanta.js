import styled from 'styled-components'

export const Vanta = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;

    canvas {
      position: fixed !important;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
      z-index: -1;
    }
`
