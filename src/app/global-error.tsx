"use client";

/**
 * Last-resort boundary for errors in the root layout itself. It replaces the
 * whole document, so it can't rely on styled-components or fonts — plain inline
 * styles only.
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", display: "grid", placeItems: "center", background: "#F6F1E6", color: "#1D2116", fontFamily: "Georgia, serif", textAlign: "center", padding: 24 }}>
        <div>
          <h1 style={{ fontWeight: 400, fontSize: 40, margin: "0 0 12px" }}>Something went wrong.</h1>
          <p style={{ fontFamily: "system-ui, sans-serif", color: "#3F4234", margin: "0 0 24px" }}>Please try again in a moment.</p>
          <button onClick={reset} style={{ padding: "14px 24px", border: 0, borderRadius: 6, background: "#66711F", color: "#fff", fontSize: 16, cursor: "pointer" }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
