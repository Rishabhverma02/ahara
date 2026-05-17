import type { Metadata } from "next";
import { Poppins, Monoton, Story_Script } from "next/font/google";
import { StyledComponentsRegistry } from "../style/registry";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-monoton",
});

const storyScript = Story_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-story-script",
});

export const metadata: Metadata = {
  title: "Ahara",
  description: "Ahara provides you super food - Combination of taste and health together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${monoton.variable} ${storyScript.variable} ${poppins.className} antialiased`}>
        <StyledComponentsRegistry>
          {/* <AuthProvider> */}
            {children}
          {/* </AuthProvider> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
