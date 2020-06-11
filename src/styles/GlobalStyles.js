import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: #222426;
        margin: 0;
        font-family: 'Rubik', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
    }
    
    div {
        box-sizing: border-box;
    }
    
    h1 {
        border-bottom: 1px solid #FFF;
        padding: 0;
        margin: 0;
        font-size: 50px;
        font-family: 'Vollkorn', serif;
    }
    
    h2 {
        margin: 20px 0;
        font-family: 'Rubik', sans-serif;
        font-style: italic;
        font-size: 30px;
    }
    
    p {
        font-size: 25px;
        margin: 20px 0;
    }
   
    
    a {
        color: #FFF;
    }
    
    i {
        a {
            font-size: 25px;
        }
    }
`;
