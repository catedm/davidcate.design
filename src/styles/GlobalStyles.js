import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: #222426;
        margin: 0;
        font-family: 'Vollkorn', serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    h1 {
        border-bottom: 1px solid white;
        padding: 0;
        margin: 0;
        font-size: 4vw;
    }
    
    h2 {
        font-size: 1.7vw;
    }
`;
