import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { StyledComponentsRegistry } from "../style/registry";

/**
 * Two families instead of three (Poppins ×7 weights, Monoton, Story Script):
 * Fraunces — a warm, slightly soft old-style serif for display — and
 * Instrument Sans for UI and body. Both are variable fonts, so each is a
 * single file regardless of weights used.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Ahara — Ancient food, modern life",
    template: "%s · Ahara",
  },
  description:
    "Roasted makhana, sattu, millet cookies and moringa — India's forgotten superfoods, made clean and snackable.",
  openGraph: {
    type: "website",
    siteName: "Ahara",
    title: "Ahara — Ancient food, modern life",
    description:
      "Roasted makhana, sattu, millet cookies and moringa — India's forgotten superfoods, made clean and snackable.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F1E6",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable}`}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
