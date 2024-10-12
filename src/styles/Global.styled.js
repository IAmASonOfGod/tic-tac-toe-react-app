import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) =>
      props.theme.colors.text}; // Ensure text color is from theme
  }

  svg {
    margin: 0;
    padding: 0;
  }

  
  ${(props) => props.theme.media.mobile} {
    * {
      font-size: 11px; // Apply font size for mobile devices
    }
  }
`;