import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Ahara — Ancient food, modern life";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Fetch just the glyphs we need from Google Fonts as TTF (Satori can't read woff2). */
async function loadFont(family: string, text: string, ital = 0) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}:ital,wght@${ital},400&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null; // offline build → falls back to the default font
  }
}

/** Default social share card (WhatsApp, X, LinkedIn…) for every page. */
export default async function OpengraphImage() {
  const roman = "AharaAncient food,Roasted makhana · Sattu · Millet cookies · Moringa";
  const [regular, italic, kairo] = await Promise.all([
    loadFont("Fraunces", roman),
    loadFont("Fraunces", "modern life.", 1),
    readFile(join(process.cwd(), "public/icon-512.png")),
  ]);
  const fonts = [
    regular && { name: "Fraunces", data: regular, style: "normal" as const, weight: 400 as const },
    italic && { name: "Fraunces", data: italic, style: "italic" as const, weight: 400 as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; style: "normal" | "italic"; weight: 400 }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "72px 80px",
          background: "#222B16",
          color: "#F6F1E6",
          fontFamily: "Fraunces",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <div style={{ display: "flex", fontSize: 30, letterSpacing: 8, color: "#DE9420" }}>AHARA</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 104, lineHeight: 1 }}>
            <span>Ancient food,</span>
            <span style={{ fontStyle: "italic", color: "#C9CD8E" }}>modern life.</span>
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "rgba(246,241,230,0.72)" }}>
            Roasted makhana · Sattu · Millet cookies · Moringa
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain <img> */}
        <img
          src={`data:image/png;base64,${kairo.toString("base64")}`}
          width={300}
          height={300}
          style={{ borderRadius: 64 }}
          alt=""
        />
      </div>
    ),
    { ...size, fonts },
  );
}
