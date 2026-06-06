"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/src/assets/images/Logo.png";
import {
  HeaderWrapper,
  HeaderInner,
  LogoWrapper,
  NavWrapper,
  NavItem,
  ActionsWrapper,
  DesktopActions,
  ActionIcon,
  CartBadge,
  DrawerOverlay,
  Drawer,
  CloseButton,
  DrawerContent,
  HamburgerButton,
  DrawerHeader,
  DrawerTitle,
  DrawerNav,
  DrawerNavItem,
  DrawerSearchWrapper,
  DrawerSearchInput,
  DrawerSearchIcon,
  DrawerActions,
  DrawerActionLink,
  DrawerFooter,
  MobileCartButton,
} from "./styled";

import { useCart } from "@/src/hooks/useCart";
import { useWishlist } from "@/src/hooks/useWishlist";
import { NavItemTypes } from "./types";
import { usePathname } from "next/navigation";
import {
  HiMenuAlt3,
  HiX,
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineShoppingBag,
} from "react-icons/hi";

const navItems: NavItemTypes[] = [
  { label: "Home", link: "/" },
  { label: "Shop", link: "/shop" },
  { label: "Ingredients", link: "/ingredients" },
  { label: "About", link: "/about" },
  { label: "FAQ", link: "/faq" },
];

export const Header = () => {
  const [animate, setAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { wishlistIds } = useWishlist();
  const wishlistCount = wishlistIds.length;

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  if (pathname === "/checkout") {
    return (
      <HeaderWrapper
        animate={animate}
        style={{
          borderBottom: "1px solid rgba(126, 124, 42, 0.08)",
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 10px 30px -10px rgba(126, 124, 42, 0.08)",
        }}
      >
        {/* Inject dynamic CSS for pulse and arrow slide animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes secure-pulse {
            0% { box-shadow: 0 0 0 0 rgba(73, 106, 53, 0.6); }
            70% { box-shadow: 0 0 0 8px rgba(73, 106, 53, 0); }
            100% { box-shadow: 0 0 0 0 rgba(73, 106, 53, 0); }
          }
          @keyframes arrow-slide {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-4px); }
          }
          .back-link {
            transition: all 0.2s ease;
          }
          .back-link:hover .back-arrow {
            animation: arrow-slide 0.8s infinite ease-in-out;
          }
        `}} />

        <HeaderInner style={{ justifyContent: "space-between", height: "80px" }}>
          <LogoWrapper style={{ transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.03)"} onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}>
            <Link href="/">
              <Image src={Logo} alt="Ahara Logo" width={130} priority />
            </Link>
          </LogoWrapper>
          
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link
              href="/cart"
              className="back-link"
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#8a8775",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#7e7c2a")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8a8775")}
            >
              <span className="back-arrow" style={{ display: "inline-block" }}>←</span>
              <span>Back to Cart</span>
            </Link>
            
            <span style={{ color: "rgba(126, 124, 42, 0.15)", fontSize: "14px" }}>|</span>

            <div
              style={{
                background: "linear-gradient(135deg, #57a8243b 0%, #57a8241d 100%)",
                border: "1.5px solid #57a8243d",
                padding: "6px 14px",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "0.5px",
                color: "#56a824ff",
                textTransform: "uppercase",
                boxShadow: "0 2px 8px rgba(73, 106, 53, 0.05)",
              }}
            >
              <span 
                style={{ 
                  display: "inline-flex", 
                  width: "6px", 
                  height: "6px", 
                  borderRadius: "50%", 
                  background: "#56a824ff", 
                  animation: "secure-pulse 1.8s infinite ease-in-out" 
                }}
              ></span>
              <span>Secure Checkout</span>
            </div>
          </div>
        </HeaderInner>
      </HeaderWrapper>
    );
  }

  return (
    <>
      <HeaderWrapper animate={animate}>
        <HeaderInner>
          <LogoWrapper>
            <Link href="/">
              <Image src={Logo} alt="Ahara Logo" width={160} priority />
            </Link>
          </LogoWrapper>

          <NavWrapper>
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                href={item.link}
                $active={pathname === item.link || (item.link !== "/" && pathname?.startsWith(item.link))}
              >
                {item.label}
              </NavItem>
            ))}
          </NavWrapper>

          <ActionsWrapper>
            <DesktopActions>
              <ActionIcon aria-label="Search">
                <HiOutlineSearch />
              </ActionIcon>
              <Link href="/wishlist" style={{ textDecoration: "none" }}>
                <ActionIcon as="div" aria-label="Wishlist">
                  <HiOutlineHeart />
                  {wishlistCount > 0 && (
                    <CartBadge style={{ background: "#c0392b" }}>{wishlistCount}</CartBadge>
                  )}
                </ActionIcon>
              </Link>
              <Link href="/cart" style={{ textDecoration: "none" }}>
                <ActionIcon as="div" aria-label="Cart">
                  <HiOutlineShoppingBag />
                  <CartBadge>{cartCount}</CartBadge>
                </ActionIcon>
              </Link>
              <ActionIcon aria-label="User Profile">
                <HiOutlineUser />
              </ActionIcon>
            </DesktopActions>

            <Link href="/cart" style={{ textDecoration: "none" }}>
              <MobileCartButton as="div" aria-label="Cart">
                <HiOutlineShoppingBag />
                <CartBadge>{cartCount}</CartBadge>
              </MobileCartButton>
            </Link>

            <HamburgerButton onClick={openDrawer} aria-label="Open Menu">
              <HiMenuAlt3 />
            </HamburgerButton>
          </ActionsWrapper>
        </HeaderInner>
      </HeaderWrapper>

      {isOpen && (
        <DrawerOverlay onClick={closeDrawer}>
          <Drawer onClick={(e) => e.stopPropagation()}>
            <DrawerHeader>
              <DrawerTitle>MENU</DrawerTitle>
              <CloseButton onClick={closeDrawer} aria-label="Close Menu">
                <HiX />
              </CloseButton>
            </DrawerHeader>

            <DrawerContent>
              <DrawerSearchWrapper>
                <DrawerSearchIcon>
                  <HiOutlineSearch />
                </DrawerSearchIcon>
                <DrawerSearchInput type="text" placeholder="Search ingredients..." />
              </DrawerSearchWrapper>
 
              <DrawerNav>
                {navItems.map((item) => (
                  <DrawerNavItem
                    key={item.label}
                    href={item.link}
                    $active={pathname === item.link || (item.link !== "/" && pathname?.startsWith(item.link))}
                    onClick={closeDrawer}
                  >
                    {item.label}
                  </DrawerNavItem>
                ))}
              </DrawerNav>

              <DrawerActions>
                <DrawerActionLink href="/wishlist" onClick={closeDrawer}>
                  <HiOutlineHeart />
                  <span>Wishlist ({wishlistCount})</span>
                </DrawerActionLink>
                <DrawerActionLink href="/cart" onClick={closeDrawer}>
                  <HiOutlineShoppingBag />
                  <span>Cart ({cartCount})</span>
                </DrawerActionLink>
                <DrawerActionLink href="/profile" onClick={closeDrawer}>
                  <HiOutlineUser />
                  <span>Profile / Account</span>
                </DrawerActionLink>
              </DrawerActions>


              <DrawerFooter>© {new Date().getFullYear()} Ahara. All rights reserved.</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </DrawerOverlay>
      )}
    </>
  );
};
