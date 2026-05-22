"use client";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalstyle";
import { lightTheme } from "../theme/theme";
import { Typography } from "../theme/Typography";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Typography />
      {children}
    </ThemeProvider>
  );
}
