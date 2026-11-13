import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { container, mq } from "@/src/theme";

export const SkipLink = styled.a`
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 200;
  padding: 0.6rem 1rem;
  border-radius: var(--radius-sm);
  background: var(--forest);
  color: var(--paper);
  font-weight: 600;
  transform: translateY(-160%);
  transition: transform 0.2s;
  &:focus {
    transform: none;
  }
`;

export const Bar = styled.header<{ $solid?: boolean }>`
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  height: var(--header-h);
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  transition:
    background-color 0.35s var(--ease-out),
    border-color 0.35s var(--ease-out);

  ${({ $solid }) =>
    $solid &&
    css`
      background: rgb(246 241 230 / 0.88);
      backdrop-filter: saturate(1.4) blur(14px);
      -webkit-backdrop-filter: saturate(1.4) blur(14px);
      border-bottom-color: var(--line);
    `}
`;

export const Inner = styled.div`
  ${container};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: clamp(1.25rem, 2.5vw, 2.5rem);

  ${mq.md} {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  padding: 0.4rem 0;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--ink-2);
  text-decoration: none;
  transition: color 0.2s;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1.5px;
    background: var(--olive);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.35s var(--ease-out);
  }

  &:hover,
  &[aria-current="page"] {
    color: var(--ink);
  }
  &:hover::after,
  &[aria-current="page"]::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const IconLink = styled(Link)<{ $hideSm?: boolean }>`
  position: relative;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: var(--ink);
  transition: background 0.2s;

  &:hover {
    background: rgb(29 33 22 / 0.06);
  }

  ${({ $hideSm }) =>
    $hideSm &&
    css`
      ${mq.sm} {
        display: none;
      }
    `}
`;

export const IconButton = styled.button`
  position: relative;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 50%;
  background: none;
  color: var(--ink);
  transition: background 0.2s;

  &:hover {
    background: rgb(29 33 22 / 0.06);
  }
`;

export const Count = styled.span<{ $accent?: boolean }>`
  position: absolute;
  top: 5px;
  right: 3px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: 1;
  background: ${({ $accent }) => ($accent ? "var(--saffron)" : "var(--ink)")};
  color: ${({ $accent }) => ($accent ? "var(--forest)" : "var(--paper)")};
`;

export const MenuButton = styled.button`
  display: none;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-right: -8px;
  border: 0;
  border-radius: 50%;
  background: none;
  color: var(--ink);

  ${mq.md} {
    display: grid;
  }
`;

/* ---------- checkout variant ---------- */
export const CheckoutMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.875rem;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--muted);
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: var(--ink);
  }
  ${mq.sm} {
    display: none;
  }
`;

export const Secure = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  background: var(--olive-tint);
  color: var(--olive-600);
  font-weight: 600;
  font-size: 0.8125rem;
`;

/* ---------- mobile drawer ---------- */
const fade = keyframes`from { opacity: 0 } to { opacity: 1 }`;
const slide = keyframes`from { transform: translateX(100%) } to { transform: none }`;
const rise = keyframes`from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: none }`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgb(29 33 22 / 0.4);
  animation: ${fade} 0.25s ease-out;
`;

export const Drawer = styled.div`
  position: absolute;
  inset: 0 0 0 auto;
  width: min(420px, 100%);
  display: flex;
  flex-direction: column;
  padding: 1.25rem var(--gutter) 2rem;
  background: var(--paper);
  animation: ${slide} 0.45s var(--ease-out);
`;

export const DrawerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(var(--header-h) - 1.25rem);
`;

export const Close = styled.button`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-right: -8px;
  border: 0;
  background: none;
  color: var(--ink);
`;

export const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  border-top: 1px solid var(--line);
`;

export const DrawerLink = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--line);
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--ink);
  text-decoration: none;
  animation: ${rise} 0.5s var(--ease-out) both;

  span {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: var(--olive);
  }
`;

export const DrawerFoot = styled.div`
  margin-top: auto;
  display: flex;
  gap: 1.5rem;
  font-size: 0.9375rem;
  font-weight: 500;

  a {
    color: var(--ink-2);
  }
`;
