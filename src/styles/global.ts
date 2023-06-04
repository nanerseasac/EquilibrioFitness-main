import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #eeeeee;
    --red: #ec240f;
    --title: #C4C4C4;
    --container: 100rem;

    --mont: 'Montserrat', sans-serif;

    --fs-small:1.6rem;
    --fs-medium:2rem;
    --fs-semi:3.5rem;
    --fs-large:4rem;
    --fs-hero:4.5rem;
    --fs-big: 2.5rem;

    --fw-small: 100;
    --fw-medium: 500;
    --fw-semi: 600;
    --fw-large: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--mont);
    font-size: 1.6rem;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    color: var(--white);
    background-size: 500% 100%;
    position: relative;
  }

  .globalBg {
    height: 100%;
    background: var(--background);
  }

  .no-padding {
    padding: 0;
  }

  p {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }

  button:hover {
    cursor: pointer;
    color: #ffdbe1;
    background-color: #660000;
  }

  ::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: red;
  margin: 0 2px;
  border-radius: 5rem;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export default GlobalStyles;
