// NOTE: InteractiveCharacter is intentionally NOT re-exported here. It pulls in
// GSAP + ScrollTrigger with a module-level side effect (registerPlugin), which
// prevented tree-shaking and shipped GSAP to every page importing this barrel.
// Import it directly from "./InteractiveCharacter" if you re-enable it.
export * from "./cards";
export * from "./Button";
export * from "./SectionHeading";
export * from "./PageHero";
export * from "./EmptyState";
export * from "./Mascot";
