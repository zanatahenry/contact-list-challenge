import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      background-color: transparent;
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: #646060;
    }
  }

  body {
    font-family: 'Montserrat', sans-serif !important;
  }
`