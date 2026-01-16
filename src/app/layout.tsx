import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { StyledComponentsRegistry } from "../style/registry";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
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
      <body className={`${poppins.className} antialiased`}>
        <StyledComponentsRegistry>
          {/* <AuthProvider> */}
            {children}
          {/* </AuthProvider> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
