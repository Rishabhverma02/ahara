"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { ThemeProviders } from "./ThemeProviders";
import { AppTokens } from "./tokens";

/**
 * Collects styled-components CSS during SSR and flushes it into the HTML.
 *
 * The theme providers (theme, global style, typography classes) render on both
 * server and client. Previously the client branch returned bare `children`, so
 * the ThemeProvider and global styles only existed on the server and were
 * dropped after hydration.
 */
export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  const content = (
    <ThemeProviders>
      <AppTokens />
      {children}
    </ThemeProviders>
  );

  if (typeof window !== "undefined") return content;

  return <StyleSheetManager sheet={sheet.instance}>{content}</StyleSheetManager>;
}
