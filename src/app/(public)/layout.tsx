import { Footer, Header } from "@/src/components";
import { Toaster } from "@/src/components/feedback/Toaster";
import { CartDrawer } from "@/src/components/layout/cart-drawer/CartDrawer";
import { SearchDialog } from "@/src/components/layout/search/SearchDialog";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <CartDrawer />
      <SearchDialog />
      <Toaster />
    </>
  );
}
