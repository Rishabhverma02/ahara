"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
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
} from "./styled";

import { NavItemTypes } from "./types";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX, HiOutlineSearch, HiOutlineHeart, HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";

const navItems: NavItemTypes[] = [
  { label: "Home", link: "/" },
  { label: "Shop", link: "/shop" },
  { label: "Recipes", link: "/recipes" }, 
  { label: "Journal", link: "/journal" },
  { label: "About", link: "/about" },
  { label: "FAQ", link: "/faq" },
];

export const Header = () => {
  const [animate, setAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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

  return (
    <>
      <HeaderWrapper animate={animate}>
        <HeaderInner>
          {/* Left: Logo */}
          <LogoWrapper>
            <Image src={Logo} alt="Ahara Logo" width={160} priority />
          </LogoWrapper>

          {/* Center: Navigation */}
          <NavWrapper>
            {navItems.map((item) => (
              <NavItem key={item.label} $active={item.label === "Home"}>
                {item.label}
              </NavItem>
            ))}
          </NavWrapper>

          {/* Right: Actions */}
          <ActionsWrapper>
            <DesktopActions>
              <ActionIcon aria-label="Search">
                <HiOutlineSearch />
              </ActionIcon>
              <ActionIcon aria-label="Wishlist">
                <HiOutlineHeart />
              </ActionIcon>
              <ActionIcon aria-label="Cart">
                <HiOutlineShoppingBag />
                <CartBadge>0</CartBadge>
              </ActionIcon>
              <ActionIcon aria-label="User Profile">
                <HiOutlineUser />
              </ActionIcon>
            </DesktopActions>
            
            <HamburgerButton onClick={openDrawer} aria-label="Open Menu">
              <HiMenuAlt3 />
            </HamburgerButton>
          </ActionsWrapper>
        </HeaderInner>
      </HeaderWrapper>

      {isOpen && (
        <DrawerOverlay onClick={closeDrawer}>
          <Drawer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeDrawer} aria-label="Close Menu">
              <HiX />
            </CloseButton>
            <DrawerContent>This is sidebar</DrawerContent>
          </Drawer>
        </DrawerOverlay>
      )}
    </>
  );
};
