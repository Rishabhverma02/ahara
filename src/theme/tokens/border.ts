import { ColorScheme } from "./color";

export const Border = (COLOR: ColorScheme) => ({
  default: `1px solid ${COLOR.text.primary}`,
  primary: `1px solid ${COLOR.brand.primary}`,
  thick: `2px solid ${COLOR.text.secondary}`,
  dashed: `2px dashed ${COLOR.text.secondary}`,
  lightGray: `1px solid ${COLOR.border.light}`,
  darkGray: `1px solid ${COLOR.border.dark}`,
  solidGray: `1px solid ${COLOR.border.gray}`,
  white: `1px solid #FFFFFF`,
  solidWhite: `2px solid #FFFFFF`,
   inputBorder: `1px solid ${COLOR.border.gray}`,
  errorInputBorder: `1px solid ${COLOR.error}`,
  getInTouchBorder: `1px solid ${COLOR.border.gray}`,
  transparentBorder: `2px solid ${COLOR.transparent}`,
  transparentBorder2: `1px solid ${COLOR.transparent}`,
  footerDivider: `1px solid ${COLOR.border.gray}`,
  lastUpdate: `7px solid ${COLOR.brand.primary}`,
  teamCard: `4px solid ${COLOR.background.secondary}`,
});
