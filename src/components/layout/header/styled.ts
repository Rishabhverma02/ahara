import styled, { css, keyframes } from "styled-components";
import Link from "next/link";

const dropDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const HeaderWrapper = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "animate",
})<{ animate: boolean }>`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  transition:
    background 0.3s ease,
    backdrop-filter 0.3s ease,
    box-shadow 0.3s ease;

  ${({ animate }) =>
    animate
      ? css`
          background: #fbfbfba8;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          animation: ${dropDown} 0.4s ease-out;
        `
      : css`
          background: transparent;
          backdrop-filter: none;
          box-shadow: none;
        `}
`;

export const HeaderInner = styled.div`
  width: 92%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavWrapper = styled.nav`
  display: flex;
  gap: 12px;
  padding: 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 1080.98px) {
    display: none;
  }
`;
    
export const NavItem = styled(Link)<{ $active?: boolean }>`
  text-decoration: none;
  border: none;
  background: ${({ $active }) =>
    $active ? "rgba(126, 125, 42, 0.13)" : "transparent"};
  color: #7e7c2a;
  padding: 10px 18px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(126, 125, 42, 0.13);
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1080.98px) {
    gap: 12px;
  }
`;

export const DesktopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ActionIcon = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #7E7C2A;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -8px;
  background: #7E7C2A;
  color: white;
  font-size: 10px;
  font-weight: 700;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: flex-end;
  z-index: 999;
  animation: ${fadeIn} 0.3s ease-out forwards;
`;

export const Drawer = styled.div`
  background: rgba(18, 18, 18, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 380px;
  height: 100%;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;
  animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @media screen and (max-width: 480px) {
    max-width: 100%;
    padding: 30px 20px;
  }
`;

export const CloseButton = styled.button`
  font-size: 22px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: rotate(90deg);
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
`;

export const DrawerTitle = styled.h3`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
`;

export const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 30px;
  width: 100%;
  border-left: 2px solid rgba(255, 255, 255, 0.06);
  padding-left: 16px;
  position: relative;
`;

export const DrawerNavItem = styled(Link)<{ $active?: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: ${({ $active }) => ($active ? "#e4e3ab" : "rgba(255, 255, 255, 0.55)")};
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.05)" : "transparent")};
  border: 1px solid ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.08)" : "transparent")};
  box-shadow: ${({ $active }) => ($active ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none")};

  &::before {
    content: "";
    position: absolute;
    left: -19px;
    top: 8px;
    bottom: 8px;
    width: 3px;
    background: #e4e3ab;
    border-radius: 2px;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 0.25s ease;
  }

  &:hover {
    color: #e4e3ab;
    background: ${({ $active }) => ($active ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.02)")};
  }
`;

export const DrawerSearchWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  width: 100%;
`;

export const DrawerSearchInput = styled.input`
  width: 100%;
  padding: 10px 16px 10px 38px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    border-color: #7e7c2a;
  }
`;

export const DrawerSearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: 16px;
`;

export const DrawerActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 24px;
  width: 100%;
`;

export const DrawerActionLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.25s ease;

  svg {
    font-size: 18px;
    color: #e4e3ab;
  }

  &:hover {
    color: #ffffff;
    transform: translateX(4px);
  }
`;

export const DrawerFooter = styled.div`
  margin-top: 24px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  padding-top: 16px;
  width: 100%;
`;

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex-grow: 1;
`;

export const HamburgerButton = styled.button`
  font-size: clamp(1rem, 2vw, 1.25rem);
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50px;
  padding: 10px 12px;
  cursor: pointer;
  z-index: 10;
  color: #ccc;

  @media screen and (min-width: 1080.98px) {
    display: none;
  }
`;

export const MobileCartButton = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: #7E7C2A;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768.01px) {
    display: none;
  }
`;
