"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, Heart, Lock, Menu, Search, ShoppingBag, X } from "lucide-react";
import Logo from "@/src/assets/images/Logo.webp";
import { useCart } from "@/src/hooks/useCart";
import { useWishlist } from "@/src/hooks/useWishlist";
import { useDialog } from "@/src/hooks/useDialog";
import { useUiStore } from "@/src/store/useUiStore";
import * as S from "./styled";

const NAV = [
  { label: "Shop", href: "/shop" },
  { label: "Ingredients", href: "/#ingredients" },
  { label: "Our story", href: "/#story" },
  { label: "Journal", href: "/#journal" },
];

export const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlistIds } = useWishlist();
  const openCart = useUiStore((s) => s.openCart);
  const openSearch = useUiStore((s) => s.openSearch);
  const closeMenu = useCallback(() => setOpen(false), []);
  useDialog(open, closeMenu);

  // close the drawer on navigation (adjust-state-during-render pattern)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    // only re-render when the boolean actually flips
    const onScroll = () => setScrolled((prev) => (window.scrollY > 12 !== prev ? !prev : prev));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);

  if (pathname === "/checkout") {
    return (
      <S.Bar $solid>
        <S.Inner>
          <Link href="/" aria-label="Ahara home">
            <Image src={Logo} alt="Ahara" height={34} style={{ width: "auto" }} priority />
          </Link>
          <S.CheckoutMeta>
            <S.BackLink href="/cart">
              <ArrowLeft size={16} aria-hidden /> Back to cart
            </S.BackLink>
            <S.Secure>
              <Lock size={14} aria-hidden /> Secure checkout
            </S.Secure>
          </S.CheckoutMeta>
        </S.Inner>
      </S.Bar>
    );
  }

  return (
    <>
      <S.SkipLink href="#main">Skip to content</S.SkipLink>
      <S.Bar $solid={scrolled}>
        <S.Inner>
          <Link href="/" aria-label="Ahara home">
            <Image src={Logo} alt="Ahara" height={38} style={{ width: "auto" }} priority />
          </Link>

          <S.Nav aria-label="Primary">
            {NAV.map((item) => (
              <S.NavLink
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </S.NavLink>
            ))}
          </S.Nav>

          <S.Actions>
            <S.IconButton type="button" onClick={openSearch} aria-label="Search products">
              <Search size={20} />
            </S.IconButton>
            <S.IconLink href="/wishlist" aria-label={`Wishlist, ${wishlistIds.length} items`} $hideSm>
              <Heart size={20} />
              {wishlistIds.length > 0 && <S.Count>{wishlistIds.length}</S.Count>}
            </S.IconLink>
            <S.IconButton
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${cartCount} items`}
              aria-haspopup="dialog"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && <S.Count $accent>{cartCount}</S.Count>}
            </S.IconButton>
            <S.MenuButton onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
              <Menu size={22} />
            </S.MenuButton>
          </S.Actions>
        </S.Inner>
      </S.Bar>

      {open && (
        <S.Overlay onClick={() => setOpen(false)}>
          <S.Drawer role="dialog" aria-modal="true" aria-label="Menu" onClick={(e) => e.stopPropagation()}>
            <S.DrawerTop>
              <Image src={Logo} alt="Ahara" height={32} style={{ width: "auto" }} />
              <S.Close onClick={() => setOpen(false)} aria-label="Close menu" autoFocus>
                <X size={22} />
              </S.Close>
            </S.DrawerTop>
            <S.DrawerNav aria-label="Mobile">
              {NAV.map((item, i) => (
                <S.DrawerLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${60 + i * 50}ms` }}
                >
                  <span>0{i + 1}</span>
                  {item.label}
                </S.DrawerLink>
              ))}
            </S.DrawerNav>
            <S.DrawerFoot>
              <Link href="/wishlist">Wishlist ({wishlistIds.length})</Link>
              <Link href="/cart">Cart ({cartCount})</Link>
            </S.DrawerFoot>
          </S.Drawer>
        </S.Overlay>
      )}
    </>
  );
};
