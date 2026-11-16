import { ColorScheme } from "./color";

export const Shadow = (COLOR: ColorScheme) => ({
  default: `0px 4px 6px ${COLOR.background.shadow}`,
  light: `0px 2px 5px ${COLOR.background.shadow}`,
  medium: `0px 6px 12px ${COLOR.background.shadow}`,
  heavy: `0px 8px 16px ${COLOR.background.shadow}`,
  cardShadowDark: `0px 4px 10px ${COLOR.background.shadow}`,
  cardShadowLight: `10px 10px 30px -30px ${COLOR.background.shadow}`,
  bgShadow: `-2px 5px 60px 0px ${COLOR.background.shadow}`,
  sectionShadow: `0px -13px ${COLOR.brand.primary}`,
});
