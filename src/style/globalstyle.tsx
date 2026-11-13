"use client";

import { createGlobalStyle } from "styled-components";

/**
 * Design tokens + base styles. Palette is drawn from the brand itself:
 * the logo's olive / saffron / roasted brown and the dark-green tins, set on
 * a warm paper ground.
 */
export const GlobalStyle = createGlobalStyle`
  :root {
    /* ground */
    --paper: #F6F1E6;
    --paper-2: #EDE4D0;
    --surface: #FFFCF6;

    /* ink */
    --ink: #1D2116;
    --ink-2: #3F4234;
    --muted: #686659;
    --muted-2: #9C998A;
    --line: rgb(29 33 22 / 0.12);
    --line-strong: rgb(29 33 22 / 0.22);

    /* brand */
    --forest: #222B16;
    --forest-2: #2E391E;
    --olive: #66711F;
    --olive-600: #535C18;
    --olive-300: #A9AE6A;
    --olive-rgb: 102 113 31;
    --olive-tint: #ECEBD5;
    --saffron: #DE9420;
    --saffron-tint: #F6E3BF;
    --earth: #6B3A16;
    --earth-700: #4C280E;

    /* status */
    --danger: #B03A2A;
    --success: #4C7A2C;

    /* type */
    --font-display: var(--font-fraunces), Georgia, "Times New Roman", serif;
    --font-sans: var(--font-instrument), system-ui, -apple-system, "Segoe UI", sans-serif;
    --fs-display: clamp(2.75rem, 1.6rem + 5.2vw, 6rem);
    --fs-h2: clamp(2rem, 1.35rem + 2.6vw, 3.5rem);
    --fs-h3: clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem);
    --fs-lead: clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);

    /* layout */
    --max-w: 1320px;
    --gutter: clamp(1rem, 0.5rem + 2.5vw, 2.5rem);
    --section-y: clamp(4.5rem, 3rem + 6vw, 8.5rem);
    --header-h: 76px;

    --radius-sm: 6px;
    --radius: 12px;
    --radius-lg: 20px;

    --shadow-sm: 0 1px 2px rgb(29 33 22 / 0.06), 0 2px 8px rgb(29 33 22 / 0.04);
    --shadow: 0 2px 6px rgb(29 33 22 / 0.05), 0 12px 32px rgb(29 33 22 / 0.08);

    --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  }

  *, *::before, *::after { box-sizing: border-box; }

  html {
    -webkit-text-size-adjust: 100%;
    scroll-padding-top: calc(var(--header-h) + 12px);
  }

  @media (prefers-reduced-motion: no-preference) {
    html { scroll-behavior: smooth; }
  }

  body {
    margin: 0;
    min-height: 100vh;
    /* clip (not hidden) so position: sticky keeps working */
    overflow-x: clip;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6, p, figure, blockquote { margin: 0; }
  ul, ol { margin: 0; padding: 0; }
  img, svg, video { display: block; max-width: 100%; }

  a { color: inherit; }

  input, button, textarea, select {
    font: inherit;
    color: inherit;
  }

  button { cursor: pointer; }

  :focus-visible {
    outline: 2px solid var(--saffron);
    outline-offset: 3px;
    border-radius: 4px;
  }

  ::selection { background: var(--saffron-tint); color: var(--ink); }

  input:-webkit-autofill,
  textarea:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--surface) inset;
    -webkit-text-fill-color: var(--ink);
  }

  .sr-only {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
