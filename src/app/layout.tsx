import type { Metadata, Viewport } from "next";
import { Poppins, Monoton, Story_Script } from "next/font/google";
import { StyledComponentsRegistry } from "../style/registry";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "../lib/site";

/* Brand fonts from the main-branch design: Poppins (UI), Monoton (section
 * titles) and Story Script (sub-headings / signatures). */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-monoton",
  display: "swap",
});

const storyScript = Story_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-story-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#EACEA7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${poppins.variable} ${monoton.variable} ${storyScript.variable}`}>
      <body className={poppins.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
