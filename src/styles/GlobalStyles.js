import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: #222426;
        margin: 0;
        font-family: 'Rubik', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    div {
        box-sizing: border-box;
    }
    
    .vanta-canvas {
      z-index: -1 !important;
    }
    
    h1 {
        border-bottom: 1px solid #FFF;
        padding: 0;
        margin: 0;
        font-size: 3rem;
        font-family: 'Vollkorn', serif;
    }
    
    h2 {
        margin: 20px 0;
        font-family: 'Rubik', sans-serif;
        font-style: italic;
        font-size: 1.6rem;
    }
    
      h3 {
        margin: 10px 0 0 0;
        font-family: 'Rubik', sans-serif;
        font-size: 1.2rem;
    }
    
    p {
        font-size: 1.5rem;
        margin: 20px 0;
        
        &.small {
          margin: 0;
          font-size: 1rem;
        }
        
        &.skill {
          margin: 10px 0 0 0;
          font-style: italic;
          font-weight: bold;
          font-size: 1.3rem;
          font-family: 'Rubik', sans-serif;
        }
    }
   
    
    a {
        color: #FFF;
    }
    
    i {
        a {
            font-size: 25px;
        }
    }

    /* CaseStudy responsive grid */
    @media (max-width: 710px) {
      .case-study-grid {
        grid-template-columns: 1fr !important;
      }
      .case-study-left-col {
        display: none !important;
      }
      /* Card latest case study button: drop absolute positioning on mobile */
      .case-study-btn {
        position: relative !important;
        bottom: auto !important;
        left: auto !important;
        right: auto !important;
        margin-top: 1rem;
        width: 100%;
      }
    }
`;
