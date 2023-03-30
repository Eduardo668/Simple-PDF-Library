import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "@fontsource/poppins/800.css";

export const GlobalStyle = createGlobalStyle`
 :root{
        --maincolor:#C6CCFC;
 }
    body{
        background-color: var(--maincolor);
        overflow-x:hidden;
    }
   *{
        margin: 0;
        padding: 0;
        overflow-x:hidden;
        -webkit-tap-highlight-color: transparent;
    }
   
    

`;

export const BackgroundModal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
