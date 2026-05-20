"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FloatingContainer,
  RopeImage,
  CharacterWrapper,
  CharacterImage,
} from "./styled";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const InteractiveCharacter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const ropeRef = useRef<HTMLImageElement>(null);

  // Individual refs for each watercolor pose to stack and toggle them synchronously
  const ch1Ref = useRef<HTMLImageElement>(null);
  const parachuteRef = useRef<HTMLImageElement>(null);
  const lSideRef = useRef<HTMLImageElement>(null);
  const rSideRef = useRef<HTMLImageElement>(null);
  const threeforthRef = useRef<HTMLImageElement>(null);
  const threeforthOppRef = useRef<HTMLImageElement>(null);
  const backRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const char = characterRef.current;
      const rope = ropeRef.current;

      const p1 = ch1Ref.current;
      const pPara = parachuteRef.current;
      const pLSide = lSideRef.current;
      const pRSide = rSideRef.current;
      const pThree = threeforthRef.current;
      const pThreeOpp = threeforthOppRef.current;
      const pBack = backRef.current;

      if (
        !char ||
        !rope ||
        !p1 ||
        !pPara ||
        !pLSide ||
        !pRSide ||
        !pThree ||
        !pThreeOpp ||
        !pBack
      )
        return;

      const mm = gsap.matchMedia();

      // DESKTOP SCREEN ACTIONS (width >= 769px)
      mm.add("(min-width: 769px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5, // Inertial scroll scrubbing
          },
        });

        // 1. INITIAL STATE:
        // Rope is offscreen. Character starts in Rope-Climbing Pose (ch1) holding the rope.
        gsap.set(rope, { y: 0 });
        gsap.set(char, { y: 0, x: 0, rotation: 0, scale: 1 });

        // Stack-toggle: Only show ch1, hide the rest
        gsap.set(p1, { autoAlpha: 1 });
        gsap.set([pPara, pLSide, pRSide, pThree, pThreeOpp, pBack], {
          autoAlpha: 0,
        });

        // 2. HERO -> TRUST BAR (Scroll 0% to 15%):
        // Rope drops from the top right, and the character slides down holding the rope.
        tl.to(rope, { y: "100vh", duration: 1.5, ease: "power2.out" }, 0)
          .to(
            char,
            {
              y: 450, // Slides down to mid-viewport height
              rotation: 10, // Slight swing
              duration: 1.5,
              ease: "power2.out",
            },
            0,
          )
          // Swing elasticity when reaching the bottom of the rope
          .to(char, { rotation: -3, duration: 0.4, ease: "power1.inOut" })
          .to(char, { rotation: 2, duration: 0.3, ease: "power1.inOut" })
          .to(char, { rotation: 0, duration: 0.2, ease: "power1.inOut" })

          // 3. TRUST BAR -> BEST SELLERS (Scroll 15% to 35%):
          // Detach from rope! Rope retracts back up.
          // Switch pose: open parachute (parachute.png) and drift left!
          .to(rope, { y: 0, duration: 1 }, "+=0.1")
          // Set pose to Parachute
          .set(p1, { autoAlpha: 0 }, "<")
          .set(pPara, { autoAlpha: 1 }, "<")
          .to(
            char,
            {
              x: -120, // Drift left
              y: 580, // Slide lower
              rotation: -8, // Tilt parachute left
              scale: 1.1, // Float slightly closer
              duration: 1.5,
              ease: "sine.inOut",
            },
            "<",
          )
          // Parachute bounce (riding air currents)
          .to(char, { y: 550, rotation: 6, duration: 0.8, ease: "sine.inOut" })
          .to(char, { y: 600, rotation: -4, duration: 0.8, ease: "sine.inOut" })

          // 4. BEST SELLERS -> ANCIENT INGREDIENTS (Scroll 35% to 60%):
          // Glide further left across the page with parachute!
          .to(char, {
            x: -1200, // Glide all the way to the far-left corner/end with the parachute
            y: 750, // Lift up slightly
            rotation: 8,
            duration: 2.2,
            ease: "sine.inOut",
          })
          .to(char, { y: 520, rotation: -6, duration: 0.8, ease: "sine.inOut" })

          // 5. ANCIENT INGREDIENTS landing (Scroll 60% to 75%):
          // Parachute packed up at the corner! Land on the far-left cards.
          // Switch pose: three-fourths opposite profile (ch-threeforth - opp), facing right towards the cards!
          .set(pPara, { autoAlpha: 0 })
          .set(pThreeOpp, { autoAlpha: 1 })
          .to(char, {
            x: -1400, // Settle at the far-left corner/end
            y: 720, // Stand altitude
            rotation: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
          })
          // Soft idle bobble (breathing) while standing
          .to(char, {
            y: 425,
            duration: 0.6,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut",
          })

          // 6. WHY WE EXIST -> JOURNAL (Scroll 75% to 88%):
          // Move from far-left back to center (moving to the right).
          // Switch pose: right-facing side profile (ch-r-side) to walk in that direction!
          .set(pThreeOpp, { autoAlpha: 0 })
          .set(pRSide, { autoAlpha: 1 })
          .to(char, {
            x: -300, // Move to center-right
            y: 650, // Move lower
            // scale: 0.7, // Reduce scale to 0.7 bcz it looks big compared to others
            duration: 2,
            ease: "sine.inOut",
          })

          // 7. STANDING AT JOURNAL (Scroll 88% to 92%):
          // Arrive at center! Switch pose: three-fourths profile (ch-threeforth) looking back left at page text!
          .set(pRSide, { autoAlpha: 0 })
          .set(pThree, { autoAlpha: 1 })
          .to(char, {
            y: 640,
            // scale: 1, // Restore original scale
            duration: 0.5,
            ease: "sine.inOut",
          })

          // 8. FOOTER (Scroll 92% to 100%):
          // Turn back to front (ch1) to wave a cheerful goodbye, spin, and fade out
          .set(pThree, { autoAlpha: 0 })
          .set(p1, { autoAlpha: 1 })
          .to(char, {
            rotation: 360,
            scale: 0.5,
            opacity: 0,
            duration: 1.2,
            ease: "power2.inOut",
          });
      });

      // MOBILE SCREEN ACTIONS (width < 768px)
      mm.add("(max-width: 768px)", () => {
        gsap.set(rope, { display: "none" }); // Hide rope
        gsap.set(char, {
          top: "auto",
          bottom: "35px",
          right: "25px",
          y: 0,
          x: 0,
          scale: 0.75,
          opacity: 0.9,
        });

        // Use Three-Fourths standing pose for mobile
        gsap.set(pThree, { autoAlpha: 1 });
        gsap.set([p1, pPara, pLSide, pRSide, pThreeOpp, pBack], {
          autoAlpha: 0,
        });

        // Loop a gentle floating bobble so it feels alive
        gsap.to(char, {
          y: -10,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <FloatingContainer ref={containerRef}>
      {/* Retractable Hanging Rope (custom watercolor rope image) */}
      <RopeImage
        ref={ropeRef}
        src="/images/character/png/rope.png"
        alt="Rope"
      />

      {/* Floating Animated Character wrapper containing all stacked watercolor poses */}
      <CharacterWrapper ref={characterRef}>
        {/* Pose 1: Holding rope / waving (front) */}
        <CharacterImage
          ref={ch1Ref}
          src="/images/character/png/ch1.png"
          alt="Ahara Character Front"
        />

        {/* Pose 2: Gliding with parachute */}
        <CharacterImage
          ref={parachuteRef}
          src="/images/character/png/parachute.png"
          alt="Ahara Character Parachute"
        />

        {/* Pose 3: Three-fourths profile stand (facing left) */}
        <CharacterImage
          ref={threeforthRef}
          src="/images/character/png/ch-threeforth.png"
          alt="Ahara Character Three-Fourths"
        />

        {/* Pose 4: Three-fourths profile opposite stand (facing right) */}
        <CharacterImage
          ref={threeforthOppRef}
          src="/images/character/png/ch-threeforth - opp.png"
          alt="Ahara Character Three-Fourths Opp"
        />

        {/* Pose 5: Left side profile stand (facing left) */}
        <CharacterImage
          ref={lSideRef}
          src="/images/character/png/ch-l-side.png"
          alt="Ahara Character Left Side"
        />

        {/* Pose 6: Right side profile stand (facing right) */}
        <CharacterImage
          ref={rSideRef}
          src="/images/character/png/ch-r-side.png"
          alt="Ahara Character Right Side"
        />

        {/* Pose 7: Back profile stand */}
        <CharacterImage
          ref={backRef}
          src="/images/character/png/ch-back.png"
          alt="Ahara Character Back"
        />
      </CharacterWrapper>
    </FloatingContainer>
  );
};
