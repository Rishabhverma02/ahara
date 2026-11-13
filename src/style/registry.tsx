"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { GlobalStyle } from "./globalstyle";

/**
 * Collects styled-components CSS during SSR and flushes it into the HTML.
 *
 * Previously the client branch returned bare `children`, so <GlobalStyle /> and
 * the ThemeProvider existed only on the server: the tree differed between
 * server and client and the global styles were dropped after hydration.
 * GlobalStyle now renders in both environments.
 */
export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  const content = (
    <>
      <GlobalStyle />
      {children}
    </>
  );

  if (typeof window !== "undefined") return content;

  return <StyleSheetManager sheet={sheet.instance}>{content}</StyleSheetManager>;
}
