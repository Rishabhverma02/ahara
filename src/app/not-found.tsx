import type { Metadata } from "next";
import { Footer, Header } from "@/src/components";
import { NotFoundView } from "@/src/components/feedback/StatusView";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <NotFoundView />
      </main>
      <Footer />
    </>
  );
}
