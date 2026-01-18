"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/src/assets/images/logos/Ahara01.png";
import {
  HeaderWrapper,
  HeaderInner,
  LogoWrapper,
  NavWrapper,
  NavItem,
  SignInButton,
  DrawerOverlay,
  Drawer,
  CloseButton,
  DrawerContent,
  HamburgerButton,
} from "./styled";

import { NavItemTypes } from "./types";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems: NavItemTypes[] = [
  { label: "Home", link: "home" },
  { label: "Expertise", link: "expertise" },
  { label: "About", link: "about" },
  { label: "Skills", link: "skills" },
  { label: "Projects", link: "projects" },
  { label: "Contact", link: "contact" },
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
            <NavItem $active>Home</NavItem>
            <NavItem>Products</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
          </NavWrapper>

          {/* Right: Sign In */}
          <SignInButton>Sign In</SignInButton>
          <HamburgerButton onClick={openDrawer} aria-label="Open Menu">
            <HiMenuAlt3 />
          </HamburgerButton>
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
