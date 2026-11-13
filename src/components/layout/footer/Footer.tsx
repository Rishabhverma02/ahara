"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GooglePay, Instagram, LinkedIn, Mastercard, Paytm, PhonePe, Visa, XTwitter, YouTube } from "@/src/components/ui/BrandIcons";
import { Wrap, Inner, Top, Brand, Contact, Social, Col, Wordmark, Bottom, Payments, Compact } from "./styled";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "All products", href: "/shop" },
      { label: "Makhana", href: "/shop" },
      { label: "Sattu", href: "/shop" },
      { label: "Millet cookies", href: "/shop" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Ingredients", href: "/#ingredients" },
      { label: "Our story", href: "/#story" },
      { label: "Journal", href: "/#journal" },
      { label: "Meet Kairo", href: "/#kairo" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", href: "/shipping" },
      { label: "Returns & refunds", href: "/refund" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const SOCIAL = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: YouTube, label: "YouTube", href: "#" },
  { icon: XTwitter, label: "X", href: "#" },
  { icon: LinkedIn, label: "LinkedIn", href: "#" },
];

const PAYMENTS = [GooglePay, PhonePe, Paytm, Visa, Mastercard];

export const Footer = () => {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  if (pathname === "/checkout") {
    return (
      <Compact>
        <Inner>
          <span>© {year} Ahara Foods</span>
          <nav aria-label="Policies">
            {COLUMNS[2].links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <span>
            Need help? <a href="mailto:support@ahara.com">support@ahara.com</a>
          </span>
        </Inner>
      </Compact>
    );
  }

  return (
    <Wrap>
      <Inner>
        <Top>
          <Brand>
            <p>
              Old grains, honest snacks. <em>Rooted in Bihar,</em> roasted for the way you live now.
            </p>
            <Contact>
              <a href="mailto:hello@ahara.com">hello@ahara.com</a>
              <span>+91 98765 43210</span>
            </Contact>
            <Social>
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}>
                  <Icon />
                </a>
              ))}
            </Social>
          </Brand>

          {COLUMNS.map((col) => (
            <Col key={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Top>

        <Wordmark aria-hidden>Ahara</Wordmark>

        <Bottom>
          <span>© {year} Ahara Foods. Made in India.</span>
          <Payments aria-label="Accepted payments">
            {PAYMENTS.map((Icon, i) => (
              <Icon key={i} />
            ))}
          </Payments>
        </Bottom>
      </Inner>
    </Wrap>
  );
};
