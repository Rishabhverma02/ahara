"use client";

import Image from "next/image";
import Link from "next/link";
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

            <MobileCartButton aria-label="Cart">
              <HiOutlineShoppingBag />
              <CartBadge>0</CartBadge>
            </MobileCartButton>

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
                  <span>Wishlist</span>
                </DrawerActionLink>
                <DrawerActionLink href="/cart" onClick={closeDrawer}>
                  <HiOutlineShoppingBag />
                  <span>Cart (0)</span>
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
