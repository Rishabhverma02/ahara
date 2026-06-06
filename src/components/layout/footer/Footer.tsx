"use client";

import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterColumn,
  FooterTitle,
  FooterLink,
  FooterText,
  NewsletterWrapper,
  NewsletterInputWrapper,
  NewsletterInput,
  NewsletterButton,
  SocialIcons,
  SocialIcon,
  FooterBottom,
  Copyright,
  PaymentIcons,
} from "./styled";
import { usePathname } from "next/navigation";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
  FaLock,
} from "react-icons/fa";

export const Footer = () => {
  const pathname = usePathname();

  if (pathname === "/checkout") {
    return (
      <FooterWrapper
        style={{
          background: "#7e7c2a",
          borderTop: "none",
          padding: "24px 0",
          color: "#ffffff",
        }}
      >
        <FooterContainer
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Top Row: Trust badges & Need Help */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            {/* Trust badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "0.5px",
                  color: "#ffffff",
                }}
              >
                <FaLock style={{ color: "#ffffff", fontSize: "10px" }} />
                <span>SECURE 256-BIT SSL CHECKOUT</span>
              </div>
            </div>

            {/* Assistance Contact Info */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "13px" }}>
              <span style={{ color: "rgba(255, 255, 255, 0.8)", fontWeight: "500" }}>Need help?</span>
              <a
                href="mailto:support@ahara.com"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: "700",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                support@ahara.com
              </a>
              <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>|</span>
              <span style={{ color: "#ffffff", fontWeight: "700" }}>+91 98765 43210</span>
            </div>
          </div>

          {/* Thin Divider Line */}
          <hr style={{ border: 0, borderTop: "1px solid rgba(255, 255, 255, 0.1)", margin: 0 }} />

          {/* Bottom Row: Policies, Copyright, Payment Logos */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            {/* Policy Links */}
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {["Privacy Policy", "Refund Policy", "Terms of Service", "Shipping Policy"].map((policy, idx) => {
                const hrefs = ["/privacy", "/refund", "/terms", "/shipping"];
                return (
                  <a
                    key={policy}
                    href={hrefs[idx]}
                    style={{
                      fontSize: "12px",
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      fontWeight: "600",
                      transition: "color 0.2s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")}
                  >
                    {policy}
                  </a>
                );
              })}
            </div>

            {/* Copyright & Payments */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)" }}>
                © {new Date().getFullYear()} AHARA. All rights reserved.
              </span>
              <div style={{ display: "flex", gap: "10px", fontSize: "20px", color: "rgba(255, 255, 255, 0.6)" }}>
                <FaCcVisa style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")} onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)")} />
                <FaCcMastercard style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")} onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)")} />
                <FaCcPaypal style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")} onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)")} />
                <FaApplePay style={{ transition: "color 0.2s" }} onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")} onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)")} />
              </div>
            </div>
          </div>
        </FooterContainer>
      </FooterWrapper>
    );
  }

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterColumn>
          <FooterTitle>About Us</FooterTitle>
          <FooterText>
            AHARA reimagines forgotten superfoods into clean, nourishing snacks
            and nutrition products made for today’s lifestyle. Inspired by
            India’s ancient food wisdom.
          </FooterText>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="/shop">Shop All</FooterLink>
          <FooterLink href="/recipes">Recipes</FooterLink>
          <FooterLink href="/journal">Journal</FooterLink>
          <FooterLink href="/about">Our Story</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Policies</FooterTitle>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/refund">Refund Policy</FooterLink>
          <FooterLink href="/terms">Terms of Service</FooterLink>
          <FooterLink href="/shipping">Shipping Policy</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Newsletter</FooterTitle>
          <FooterText>
            Join our community for recipes, health tips and exclusive offers.
          </FooterText>
          <NewsletterWrapper>
            <NewsletterInputWrapper>
              <NewsletterInput type="email" placeholder="Your email address" />
              <NewsletterButton>Subscribe</NewsletterButton>
            </NewsletterInputWrapper>
            <SocialIcons>
              <SocialIcon href="#">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="#">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#">
                <FaLinkedin />
              </SocialIcon>
            </SocialIcons>
          </NewsletterWrapper>
        </FooterColumn>
      </FooterContainer>

      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} AHARA. All rights reserved.
        </Copyright>
        <PaymentIcons>
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaApplePay />
        </PaymentIcons>
      </FooterBottom>
    </FooterWrapper>
  );
};
