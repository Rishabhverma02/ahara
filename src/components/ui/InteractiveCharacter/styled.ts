import styled from "styled-components";

export const FloatingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none; /* Allows user to click buttons behind the floating layer */
  z-index: 9999; /* Float above all other site content */
  overflow: hidden;
`;

export const RopeImage = styled.img`
  position: absolute;
  top: -100vh; /* Start completely offscreen vertically */
  right: -8%; /* Align extremely close to the right edge of the screen */
  width: 20%; /* Elegant width for custom watercolor rope */
  height: 100vh;
  object-fit: fill; /* Fills and stretches the rope vertically down the screen */
  pointer-events: none;
`;

export const CharacterWrapper = styled.div`
  position: absolute;
  top: -300px; /* Start offscreen vertically */
  right: -3%; /* Shift to the far right corner, left of the rope */
  width: 170px;
  height: 230px; /* Taller height to encapsulate the gorgeous parachute safely */
  transform: translate(50%, 0);
  transform-origin: top center; /* Perfect pivot point for rope swinging */
  pointer-events: none;

  @media (max-width: 768px) {
    width: 110px; /* Scale down on tablets and mobiles */
    height: 150px;
    right: 5%;
  }
`;

export const CharacterImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensures high-quality proportions are kept perfectly */
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.15));
  opacity: 0;
  visibility: hidden; /* Stacked and hidden by default, animated via GSAP autoAlpha */
`;
