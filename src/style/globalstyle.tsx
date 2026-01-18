"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: #EACEA7;
    font-family: inherit;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6,
  p {
    margin: 0;
    padding: 0;
  }

  input,
  button,
  textarea,
  select {
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
  }

  p, input, button, textarea {
    margin: 0;
    padding: 0;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill {
    background-color: transparent;
    -webkit-box-shadow: 0 0 0 1000px white inset;
    -webkit-text-fill-color: #333;
    transition: background-color 9999s ease-in-out 0s;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border: 2px solid #786752a0;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
