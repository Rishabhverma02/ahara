/**
 * Policy page content.
 *
 * DRAFT TEMPLATES — written from the shop's own rules (shipping charges, COD
 * fee, delivery times). Everything in [TO CONFIRM] brackets is a placeholder.
 * Have these reviewed by a lawyer before launch: Indian e-commerce sites must
 * meet the Consumer Protection (E-Commerce) Rules 2020 (incl. a named
 * grievance officer) and the Digital Personal Data Protection Act 2023.
 */
import {
  COD_FEE,
  EXPRESS_SHIPPING_CHARGE,
  FREE_SHIPPING_THRESHOLD,
  STANDARD_SHIPPING_CHARGE,
} from "@/src/lib/pricing";

export type PolicySection = { heading: string; body: string[] };
export type Policy = {
  slug: string;
  title: string;
  summary: string;
  updated: string;
  sections: PolicySection[];
};

const CONTACT = "support@ahara.com"; // [TO CONFIRM]
const GRIEVANCE =
  "Grievance Officer: [TO CONFIRM — name], Ahara Foods, Somwariya Bazar, Jaora, Madhya Pradesh 457226. Email: [TO CONFIRM]. We acknowledge complaints within 48 hours and resolve them within one month.";

export const POLICIES: Policy[] = [
  {
    slug: "shipping",
    title: "Shipping policy",
    summary: "Where we ship, how long it takes and what it costs.",
    updated: "2026-11-13",
    sections: [
      {
        heading: "Delivery charges",
        body: [
          `Standard delivery is free on orders of ₹${FREE_SHIPPING_THRESHOLD} or more. Below that, standard delivery costs ₹${STANDARD_SHIPPING_CHARGE}.`,
          `Express delivery costs ₹${EXPRESS_SHIPPING_CHARGE} regardless of order value.`,
          `Cash on delivery orders carry a ₹${COD_FEE} handling fee. Store pickup from our Jaora office is free.`,
        ],
      },
      {
        heading: "Delivery times",
        body: [
          "Standard delivery: 3–5 working days after dispatch. Express: 24–48 hours in metro cities, longer elsewhere.",
          "Orders are dispatched within [TO CONFIRM] working days. You'll receive tracking details by email once your order ships.",
        ],
      },
      {
        heading: "Where we ship",
        body: [
          "We currently ship within India only. Some remote PIN codes may take longer or be unserviceable; we'll contact you if that applies.",
        ],
      },
    ],
  },
  {
    slug: "refund",
    title: "Returns & refunds",
    summary: "What to do if something arrives damaged, wrong or past its best.",
    updated: "2026-11-13",
    sections: [
      {
        heading: "Food products",
        body: [
          "Because our products are food, we can't accept returns of opened packs or change-of-mind returns.",
          `If your order arrives damaged, incorrect, or past its best-before date, email ${CONTACT} within [TO CONFIRM — e.g. 48 hours] of delivery with your order number and a photo. We'll send a replacement or a full refund.`,
        ],
      },
      {
        heading: "Refund timing",
        body: [
          "Approved refunds go back to the original payment method within [TO CONFIRM — e.g. 5–7] working days. Cash on delivery orders are refunded by bank transfer or UPI.",
        ],
      },
      {
        heading: "Cancellations",
        body: [
          "You can cancel an order free of charge before it is dispatched. Email us with your order number.",
        ],
      },
      { heading: "Grievances", body: [GRIEVANCE] },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy policy",
    summary: "What personal data we collect, why, and your rights over it.",
    updated: "2026-11-13",
    sections: [
      {
        heading: "What we collect",
        body: [
          "When you order: your name, email, phone number and delivery address. When you subscribe: your email address.",
          "Payment details (card, UPI, bank) are entered directly with our payment provider, Razorpay, and are never stored on our servers.",
          "Your cart and wishlist are stored in your own browser (local storage) so they persist between visits.",
        ],
      },
      {
        heading: "Why we use it",
        body: [
          "To fulfil and deliver your order, send order updates, handle support requests, and — only if you opt in — send our newsletter.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "Only the services needed to run the shop: payment processing (Razorpay), delivery partners, and our email provider. We never sell your data.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          `Under the Digital Personal Data Protection Act 2023 you can ask to access, correct or delete your data, or withdraw consent, by emailing ${CONTACT}.`,
          GRIEVANCE,
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of service",
    summary: "The terms that apply when you shop with Ahara.",
    updated: "2026-11-13",
    sections: [
      {
        heading: "About us",
        body: [
          "This site is operated by Ahara Foods, [TO CONFIRM — legal entity, address, GSTIN, FSSAI licence number].",
        ],
      },
      {
        heading: "Orders & pricing",
        body: [
          "All prices are in Indian rupees and include applicable taxes. We may cancel an order if a product is unavailable or a price was displayed in error; any payment will be refunded in full.",
          "Promo codes can't be combined unless stated, have no cash value, and may be withdrawn at any time.",
        ],
      },
      {
        heading: "Product information",
        body: [
          "We describe our products and their nutrition as accurately as we can. Our products are food, not medicine, and are not intended to diagnose, treat or cure any condition. Check the pack for allergen information.",
        ],
      },
      {
        heading: "Governing law",
        body: ["These terms are governed by the laws of India. [TO CONFIRM — jurisdiction city]."],
      },
      { heading: "Grievances", body: [GRIEVANCE] },
    ],
  },
];

export const POLICY_SLUGS = POLICIES.map((p) => p.slug);
export const getPolicy = (slug: string) => POLICIES.find((p) => p.slug === slug);
