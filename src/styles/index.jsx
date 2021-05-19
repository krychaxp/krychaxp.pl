import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
}
:root{
    --header-height:min(80px,12vw);
}
:root:not(.dark-mode) {
    --white-to-dark: white;
    --black-to-white: #000;
    --blue-to-darker: #039;
    --blue-to-white: #039;
}
.dark-mode {
    --white-to-dark: #222;
    --black-to-white: #fff;
    --blue-to-darker: #0066ff;
    --blue-to-white: #fff;
}
::selection,
mark {
    background-color: var(--blue-to-darker);
    color: #fff;
}
::-webkit-scrollbar {
    width: 15px !important;
}
::-webkit-scrollbar-track {
    background: #ddd;
}
::-webkit-scrollbar-thumb {
    background: #0059b2;
}
::-webkit-scrollbar-thumb:hover {
    background: var(--blue-to-darker);
}
code {
    background-color: #ddd;
    padding: 3px;
    border-radius: 10px;
    line-height: 30px;
    color: black;
}
html {
    scroll-behavior: smooth;
}

body {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
        Droid Sans, Helvetica Neue, sans-serif;
    font-size: 20px;
    background-color: var(--white-to-dark);
    color: var(--black-to-white);
    text-align: center;
}
a {
    cursor: pointer;
    color: var(--black-to-white);
    text-decoration: none;
    font-weight: 500;
    &:focus-visible {
        outline: 2px solid var(--black-to-white);
    }
}
h1 {
    box-sizing: border-box;
    font-size: min(10vw, 60px);
    margin: 20px auto;
    text-align: center;
    width: 100%;
    overflow: hidden;
    color: var(--blue-to-white);
    font-weight: 600;
}
hr {
    width: calc(100% - 20px);
    height: 2px;
    box-sizing: border-box;
    background-color: var(--blue-to-white);
    margin: 10px;
    border: none;
}

`;
