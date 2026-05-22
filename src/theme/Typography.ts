"use client";
import { COLOR } from "./Color";
import { FONT_WEIGHT } from "./tokens/fontWeight";
import { LINE_HEIGHT } from "./tokens/lineHeight";
import { createGlobalStyle, css } from "styled-components";


export const Typography = createGlobalStyle`
  .text-12 { font-size: clamp(0.75rem, 1vw, 0.75rem); }   
  .text-14 { font-size: clamp(0.875rem, 1.1vw, 0.875rem); } 
  .text-16 { font-size: clamp(1rem, 1.2vw, 1rem); }       
  .text-18 { font-size: clamp(1.125rem, 1.4vw, 1.125rem); } 
  .text-20 { font-size: clamp(1.25rem, 1.6vw, 1.25rem); }
  .text-22 { font-size: clamp(1.375rem, 1.8vw, 1.375rem); } 
  .text-24 { font-size: clamp(1.5rem, 2vw, 1.5rem); }     
  .text-26 { font-size: clamp(1.625rem, 2.2vw, 1.625rem); } 
  .text-28 { font-size: clamp(1.75rem, 2.4vw, 1.75rem); } 
  .text-30 { font-size: clamp(1.875rem, 2.6vw, 1.875rem); } 
  .text-32 { font-size: clamp(2rem, 2.8vw, 2rem); }      
  .text-34 { font-size: clamp(2.125rem, 3vw, 2.125rem); }
  .text-36 { font-size: clamp(2.25rem, 3.2vw, 2.25rem); } 
  .text-38 { font-size: clamp(2.375rem, 3.4vw, 2.375rem); } 
  .text-40 { font-size: clamp(2.5rem, 3.6vw, 2.5rem); }   
  .text-48 { font-size: clamp(3rem, 4.5vw, 3rem); }     
  .text-67 { font-size: clamp(4.1875rem, 6.5vw, 4.1875rem); } 
`;


/* css snippets */
export const text10 = css`
  font-size: clamp(0.5rem, 1vw, 0.625rem);
`;
export const text11 = css`
  font-size: clamp(0.55rem, 1.1vw, 0.6875rem);
`;
export const text12 = css`
  font-size: clamp(0.6rem, 1.2vw, 0.75rem);
`;
export const text13 = css`
  font-size: clamp(0.65rem, 1.3vw, 0.8125rem);
`;
export const text14 = css`
  font-size: clamp(0.7rem, 1.4vw, 0.875rem);
`;
export const text15 = css`
  font-size: clamp(0.75rem, 1.5vw, 0.9375rem);
`;
export const text16 = css`
  font-size: clamp(0.8rem, 1.6vw, 1rem);
`;
export const text18 = css`
  font-size: clamp(0.9rem, 1.8vw, 1.125rem);
`;
export const text19 = css`
  font-size: clamp(0.95rem, 1.9vw, 1.18rem);
`;
export const text20 = css`
  font-size: clamp(1rem, 2vw, 1.25rem);
`;
export const text22 = css`
  font-size: clamp(1.1rem, 2.2vw, 1.375rem);
`;
export const text24 = css`
  font-size: clamp(1.2rem, 2.4vw, 1.5rem);
`;
export const text25 = css`
  font-size: clamp(1.25rem, 2.5vw, 1.5625rem);
`;
export const text26 = css`
  font-size: clamp(1.3rem, 2.6vw, 1.625rem);
`;
export const text28 = css`
  font-size: clamp(1.4rem, 2.8vw, 1.75rem);
`;
export const text30 = css`
  font-size: clamp(1.5rem, 3vw, 1.875rem);
`;
export const text32 = css`
  font-size: clamp(1.6rem, 3.2vw, 2rem);
`;
export const text34 = css`
  font-size: clamp(1.7rem, 3.4vw, 2.125rem);
`;
export const text36 = css`
  font-size: clamp(1.8rem, 3.6vw, 2.25rem);
`;
export const text38 = css`
  font-size: clamp(1.9rem, 3.8vw, 2.375rem);
`;
export const text40 = css`
  font-size: clamp(2rem, 4vw, 2.5rem);
`;
export const text45 = css`
  font-size: clamp(2rem, 4.5vw, 2.813rem);
`;
export const text48 = css`
  font-size: clamp(2.4rem, 4.8vw, 3rem);
`;
export const text67 = css`
  font-size: clamp(3.35rem, 6.7vw, 4.1857rem);
`;

/* ---------- Headings ---------- */
export const heroHeading = css`
  ${text67};
  font-weight: ${FONT_WEIGHT.bold};
  line-height: ${LINE_HEIGHT.tight};
  color: ${COLOR.white};
`;
export const h1 = css`
  ${text19};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: ${LINE_HEIGHT.tight};
  text-align: center;
  text-transform: uppercase;
`;

export const h2 = css`
  ${text45};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: ${LINE_HEIGHT.tight};
  text-align: center;
`;

export const h3 = css`
  ${text22};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: ${LINE_HEIGHT.relaxed};
  text-align: center;
`;

export const h4 = css`
  ${text12};
  font-weight: ${FONT_WEIGHT.bold};
  line-height: ${LINE_HEIGHT.tight};
  text-align: center;
`;

export const h5 = css`
  ${text14};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: ${LINE_HEIGHT.tight};
`;

export const h6 = css`
  ${text12};
  font-weight: ${FONT_WEIGHT.bold};
  line-height: ${LINE_HEIGHT.tight};
  text-align: center;
`;

/* ---------- Predefined Roles ---------- */
export const description = css`
  ${text16};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: ${LINE_HEIGHT.relaxed};
  color: ${COLOR.text.secondary};
`;

export const cardDescription = css`
  ${text14};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: ${LINE_HEIGHT.normal};
  color: ${COLOR.text.secondary};
  text-align: center;
`;

export const navText = css`
  ${text14}
  font-weight: ${FONT_WEIGHT.regular};
  line-height: ${LINE_HEIGHT.extraTight};
  color: ${COLOR.white};
  text-align: center;
`;
export const followTag = css`
  ${text20}
  font-weight: ${FONT_WEIGHT.medium};
  line-height: ${LINE_HEIGHT.tight};
  color: ${COLOR.white};
`;
export const copyRightText = css`
  ${text12}
  font-weight: ${FONT_WEIGHT.regular};
  line-height: ${LINE_HEIGHT.normal};
  color: ${COLOR.white};
`;

export const miniText = css`
  ${text12};
  font-weight: ${FONT_WEIGHT.bold};
  line-height: ${LINE_HEIGHT.tight};
  text-align: center;
`;

export const buttonText = css`
  ${text16};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: ${LINE_HEIGHT.tight};
  text-align: center;
`;

export const sectionHeading = css`
  ${text32};
  font-weight: ${FONT_WEIGHT.medium};
  line-height: ${LINE_HEIGHT.tight};
`;

export const sectionDescription = css`
  ${text20};
  font-weight: ${FONT_WEIGHT.regular};
  line-height: ${LINE_HEIGHT.relaxed};
  color: ${COLOR.white};
  text-align: center;
`;


export const ceoText = css`
  ${text20}
  font-weight: ${FONT_WEIGHT.medium};
  line-height: ${LINE_HEIGHT.tight};
  color: ${COLOR.text.offGray};
  text-align: center;
`;

export const extra2 = css`
  ${text14};
`;

export const extra3 = css`
  ${text14};
`;
