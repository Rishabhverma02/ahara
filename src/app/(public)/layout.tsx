import { Footer, Header } from "@/src/components";
import { Toaster } from "@/src/components/feedback/Toaster";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <Toaster />
    </>
  );
}
