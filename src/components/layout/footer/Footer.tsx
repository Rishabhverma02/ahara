"use client";

import React from 'react';
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
  PaymentIcons 
} from './styled';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal, FaApplePay } from 'react-icons/fa';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Column 1: About Us */}
        <FooterColumn>
          <FooterTitle>About Us</FooterTitle>
          <FooterText>
            AHARA reimagines forgotten superfoods into clean, nourishing snacks and nutrition products made for today’s lifestyle. Inspired by India’s ancient food wisdom.
          </FooterText>
        </FooterColumn>

        {/* Column 2: Quick Links */}
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="/shop">Shop All</FooterLink>
          <FooterLink href="/recipes">Recipes</FooterLink>
          <FooterLink href="/journal">Journal</FooterLink>
          <FooterLink href="/about">Our Story</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
        </FooterColumn>

        {/* Column 3: Policies */}
        <FooterColumn>
          <FooterTitle>Policies</FooterTitle>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/refund">Refund Policy</FooterLink>
          <FooterLink href="/terms">Terms of Service</FooterLink>
          <FooterLink href="/shipping">Shipping Policy</FooterLink>
        </FooterColumn>

        {/* Column 4: Newsletter */}
        <FooterColumn>
          <FooterTitle>Newsletter</FooterTitle>
          <FooterText>Join our community for recipes, health tips and exclusive offers.</FooterText>
          <NewsletterWrapper>
            <NewsletterInputWrapper>
              <NewsletterInput type="email" placeholder="Your email address" />
              <NewsletterButton>Subscribe</NewsletterButton>
            </NewsletterInputWrapper>
            <SocialIcons>
              <SocialIcon href="#"><FaFacebook /></SocialIcon>
              <SocialIcon href="#"><FaInstagram /></SocialIcon>
              <SocialIcon href="#"><FaTwitter /></SocialIcon>
              <SocialIcon href="#"><FaLinkedin /></SocialIcon>
            </SocialIcons>
          </NewsletterWrapper>
        </FooterColumn>
      </FooterContainer>

      <FooterBottom>
        <Copyright>© {new Date().getFullYear()} AHARA. All rights reserved.</Copyright>
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
