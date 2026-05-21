import styled, { css, keyframes } from "styled-components";

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

/* Inner container */
export const HeaderInner = styled.div`
  width: 92%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* Logo */
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

/* Center translucent nav bar */
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

/* Nav item */
export const NavItem = styled.button<{ $active?: boolean }>`
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

  &:hover {
    background: rgba(126, 125, 42, 0.13);
  }
`;

/* Sign in button */
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

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: flex-end;
  z-index: 51;
`;

export const Drawer = styled.div`
  background: rgba(24, 24, 24, 0.4);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  width: 60%;
  height: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: slideIn 0.4s ease forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @media screen and (max-width: 912.98px) {
    width: 75%;
  }
`;

export const CloseButton = styled.button`
  font-size: clamp(1rem, 2vw, 1.25rem);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: 50px;
  padding: 8px;
  cursor: pointer;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  color: #ccc;
`;

export const DrawerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-direction: column;
  color: #ffffff;
  text-align: center;
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
