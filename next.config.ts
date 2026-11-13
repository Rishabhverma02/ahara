import type { NextConfig } from "next";

/**
 * Security headers applied to every response.
 *
 * A strict Content-Security-Policy is intentionally not enabled yet:
 * styled-components injects <style> tags at runtime and Next inlines bootstrap
 * scripts, so a useful CSP needs per-request nonces. Add it once hosting is
 * chosen (see README → "Security").
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Permissions-Policy",
    // payment is allowed for Razorpay's checkout frame
    value: 'camera=(), microphone=(), geolocation=(), payment=(self "https://api.razorpay.com" "https://checkout.razorpay.com")',
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
