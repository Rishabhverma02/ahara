// color.ts

// Shared base tokens
export const baseColor = {
  transparent: "transparent",
  error: "#FF4D4D",
  success: "#4CAF50",
  warning: "#FFC107",
  info: "#2196F3",
  white:"#ffffff",
  black:"#000000",

  // Scrollbars
  scrollbarLight: "rgba(0, 0, 0, 0.3)",
  scrollbarLightHover: "rgba(0, 0, 0, 0.5)",
  scrollbarDark: "rgba(255, 255, 255, 0.3)",
  scrollbarDarkHover: "rgba(255, 255, 255, 0.5)",

  // Glass Effects
  glassLight: "rgba(39, 38, 38, 0.2)",
  // glassLightStrong: "rgba(130, 124, 124, 0.12)",
  glassLightStrong: "rgba(255, 255, 255, 0.03)",
  glassDark: "rgba(24, 24, 24, 0.4)",
  glassDarkStrong: "rgba(68, 68, 68, 0.4)",

  // Shadow
  shadowLight: "rgba(0, 0, 0, 0.1)",
  shadowDark: "rgba(0, 0, 0, 0.36)",

  // Gradent 
  contactDBg: "linear-gradient(180deg, #191d28 0%, #343c47 56%, #52525e 100%)",
  contactLBg: "linear-gradient(179deg,rgba(214, 222, 235, 1) 0%, rgba(172, 201, 250, 1) 100%, rgba(120, 153, 214, 1) 100%)",

  // Spare-Colors
  nevyBlue: " #1f2230",
  ocenBlue: " #285496ff",
  duskyBlue: "#7b80a185",
  duskyGray: "#2a2d3e",
};

// Light Theme Colors
export const lightColor = {
  ...baseColor,

  mode: "light",

  brand: {
    primary: "#0d1e60ff",
  },

  text: {
    primary: "#335fafff", 
    secondary: "#10367D", 
    muted: "rgba(0, 0, 0, 0.6)", 
    headingPrimary: "#111111",
    headingSecondary: "#333333",
    link: "#1A73E8",
    linkHover: "#1558B0",
    error: "#D32F2F",
    success: "#388E3C",
    warning: "#F57C00",
    info: "#1976D2",
    midGray: "#cccccce1",
  },

  background: {
    primary: "#d6deebff",
    secondary: "#eceaea",
    glass: baseColor.glassLight,
    glassStrong: baseColor.glassLightStrong,
    shadow: baseColor.shadowLight,
    serviceCardBackground: "#f6f8f8ff",
    contactBackground: baseColor.contactLBg,
    contactFormBackground: baseColor.ocenBlue,
    contactInputBackground: baseColor.duskyBlue,
    
  },

  scroll: {
    scrollbar: baseColor.scrollbarLight,
    scrollbarHover: baseColor.scrollbarLightHover,
  },

  border: {
    light: "#8f8f9371",
    dark: "#22273cff",
    gray: "#AEABAB",
  },

  shadow: {
     base: "0 4px 20px rgba(0, 0, 0, 0.6)"
  }
};

// Dark Theme Colors
export const darkColor = {
  ...baseColor,

  mode: "dark",

  brand: {
    primary: "#FCB407",
  },

  text: {
    primary: "#f1ededff",
    secondary: "#CCCCCC",
    muted: "#ffffff99",
    headingPrimary: "#FFFFFF",
    headingSecondary: "#E0E0E0",
    link: "#4EA1FF",
    linkHover: "#80BFFF",
    error: "#FF4D4D",
    success: "#4CAF50",
    warning: "#FFC107",
    info: "#2196F3",
    midGray: "#ffffff67",
  },

  background: {
    primary: "#191D28",
    secondary: "#161922",
    glass: baseColor.glassDark,
    glassStrong: baseColor.glassDarkStrong,
    shadow: baseColor.shadowDark,
    serviceCardBackground: baseColor.glassLightStrong,
    contactBackground: baseColor.contactDBg,
    contactFormBackground: baseColor.nevyBlue,
    contactInputBackground: baseColor.duskyGray,
  },

  scroll: {
    scrollbar: baseColor.scrollbarDark,
    scrollbarHover: baseColor.scrollbarDarkHover,
  },

  border: {
    light: "rgba(255, 255, 255, 0.05)",
    dark: "#333333",
    gray: "#AEABAB",
  },
  shadow: {
    base: "0 4px 20px rgba(0, 0, 0, 0.4)"
  }
};

// Theme type
export type ColorScheme = typeof lightColor;
