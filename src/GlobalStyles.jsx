import { createGlobalStyle } from 'styled-components';
import logoFont from './fonts/SairaStencilOne-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
    :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  background-color: #877bdb;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@font-face {
        font-family: 'Saira';
        src: local('Saira'),
        url(${logoFont}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    body {
      min-width: 320px;
  position: relative;
  margin: 0;
  /* font-family: "MontserratMedium", sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  list-style: none;
  padding: 0 0;
}

a {
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
  border: none;
}
`;
