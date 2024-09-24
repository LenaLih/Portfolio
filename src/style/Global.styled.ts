import { theme } from './Theme';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}


body {
   margin: 0;
   font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
   line-height: 1.2;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

a {
   text-decoration: none;
}
ul {
   list-style: none;
}
button {
   background-color: unset;
   border: none;
}
section {
   background-color: ${theme.color.primaryBg};
   padding: 80px 0;
}
h3 {
   font-weight: 500;
   font-size: 28px;
   color: ${theme.color.fond};
}
p {
font-weight: 300;
font-size: 18px;
color: ${theme.color.secanaryFond};
}
`;
