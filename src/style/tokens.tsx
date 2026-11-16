"use client";

import { createGlobalStyle } from "styled-components";

/**
 * CSS variables in the main-branch palette (olive #7E7C2A, roasted brown
 * #5F320F, cream #FDFAF5, Poppins). The original page styles use hex values
 * directly; these variables let the newer shared components — mini-cart,
 * search, toasts, 404, policy pages, checkout flow — match that look.
 *
 * Base resets, fonts and scrollbar styling come from ./globalstyle (main).
 */
export const AppTokens = createGlobalStyle`
  :root {
    --paper: #FDFAF5;
    --paper-2: #F0E6D2;
    --surface: #FFFFFF;

    --ink: #2A241E;
    --ink-2: #3A2F25;
    --muted: #6C6959;
    --muted-2: #A7A48A;
    --line: rgb(126 124 42 / 0.12);
    --line-strong: rgb(126 124 42 / 0.28);

    --forest: #5F320F;
    --forest-2: #48260B;
    --olive: #7E7C2A;
    --olive-600: #6A6823;
    --olive-300: #A7A55A;
    --olive-rgb: 126 124 42;
    --olive-tint: #ECF3D4;
    --saffron: #E9A23B;
    --saffron-tint: #FBEBCF;
    --glow: #F3E5D1;
    --earth: #5F320F;
    --earth-700: #48260B;

    --danger: #C0392B;
    --success: #496A35;

    --font-display: var(--font-poppins), system-ui, sans-serif;
    --font-sans: var(--font-poppins), system-ui, sans-serif;
    --fs-display: clamp(2.75rem, 1.6rem + 5.2vw, 5.25rem);
    --fs-h2: clamp(2rem, 1.35rem + 2.6vw, 3rem);
    --fs-h3: clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem);
    --fs-lead: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);

    --max-w: 1400px;
    --gutter: 4vw;
    --section-y: clamp(4rem, 3rem + 5vw, 7rem);
    --header-h: 80px;

    --radius-sm: 8px;
    --radius: 12px;
    --radius-lg: 20px;

    --shadow-sm: 0 4px 12px rgb(42 36 30 / 0.04);
    --shadow: 0 10px 30px rgb(126 124 42 / 0.1);

    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :focus-visible {
    outline: 2px solid #7E7C2A;
    outline-offset: 3px;
  }

  /* MUI SvgIcon-like default size for the Material icon replacements */
  .md-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
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
