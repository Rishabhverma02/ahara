/** Site-wide constants. SITE_URL comes from env so previews/staging get correct absolute URLs. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const SITE_NAME = "Ahara";
export const SITE_TAGLINE = "Ancient food, modern life";
export const SITE_DESCRIPTION =
  "Roasted makhana, sattu, millet cookies and moringa — India's forgotten superfoods, made clean and snackable.";
