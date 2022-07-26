import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body {
    color: ${props => props.theme.color.black.dark}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyled;