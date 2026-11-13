"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { FaCcMastercard, FaCcVisa, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiPaytm, SiPhonepe, SiGooglepay } from "react-icons/si";
import { container, mq } from "@/src/theme";

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
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaXTwitter, label: "X", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

const PAYMENTS = [SiGooglepay, SiPhonepe, SiPaytm, FaCcVisa, FaCcMastercard];

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
              <Icon key={i} aria-hidden />
            ))}
          </Payments>
        </Bottom>
      </Inner>
    </Wrap>
  );
};

const Wrap = styled.footer`
  position: relative;
  background: var(--forest);
  color: rgb(246 241 230 / 0.72);
  padding-top: clamp(4rem, 8vw, 6.5rem);
  overflow: hidden;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: var(--paper);
    }
  }
`;

const Inner = styled.div`
  ${container};
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.6fr repeat(3, 1fr);
  gap: clamp(2rem, 4vw, 4rem);

  ${mq.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mq.sm} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    max-width: 22rem;
    font-family: var(--font-display);
    font-size: clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem);
    line-height: 1.3;
    color: var(--paper);
  }
  em {
    color: var(--saffron);
  }

  ${mq.lg} {
    grid-column: 1 / -1;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9375rem;
`;

const Social = styled.div`
  display: flex;
  gap: 0.5rem;

  a {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgb(246 241 230 / 0.18);
    font-size: 1rem;
    &:hover {
      border-color: var(--paper);
    }
  }
`;

const Col = styled.div`
  h2 {
    margin-bottom: 1.25rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--saffron);
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  a {
    font-size: 0.9375rem;
  }
`;

const Wordmark = styled.div`
  margin: clamp(3rem, 6vw, 5rem) 0 -0.12em;
  font-family: var(--font-display);
  font-style: italic;
  font-variation-settings: "opsz" 144, "SOFT" 100;
  font-size: clamp(6rem, 24vw, 22rem);
  line-height: 0.8;
  letter-spacing: -0.04em;
  color: rgb(246 241 230 / 0.06);
  user-select: none;
  white-space: nowrap;
`;

const Bottom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 0 2rem;
  border-top: 1px solid rgb(246 241 230 / 0.12);
  font-size: 0.8125rem;

  ${mq.sm} {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const Payments = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
  color: rgb(246 241 230 / 0.5);
`;

const Compact = styled.footer`
  padding: 1.5rem 0;
  border-top: 1px solid var(--line);
  font-size: 0.8125rem;
  color: var(--muted);

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
  }
  a {
    color: inherit;
    &:hover {
      color: var(--ink);
    }
  }
`;
