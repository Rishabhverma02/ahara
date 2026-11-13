"use client";

import { useState } from "react";
import styled from "styled-components";
import { ArrowRight, Check } from "lucide-react";
import { Button, Mascot } from "@/src/components/ui";
import { useInView } from "@/src/hooks/useInView";
import { container, h2, mq, reveal, sectionY } from "@/src/theme";
import { toast } from "@/src/store/useToastStore";

/**
 * The newsletter, once. (It previously appeared both here and in the footer.)
 * Kairo peeks over the edge of the card — his only appearance on the page
 * besides his own section.
 */
export const Community = () => {
  const { ref, inView } = useInView<HTMLElement>();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    // TODO: connect to the mailing-list provider
    setError("");
    setDone(true);
    toast("You're on the list", "Watch your inbox for recipes and early access to Kairo.");
  };

  return (
    <Section id="community" ref={ref}>
      <Peek $in={inView}>
        <Mascot pose="threeQuarter" width={150} motion="none" />
      </Peek>
      <Card $in={inView}>
        <Copy>
          <h2>
            Recipes, rituals &amp; <em>first dibs.</em>
          </h2>
          <p>One thoughtful email a fortnight — new flavours before they launch, seasonal recipes, and early access to Kairo.</p>
        </Copy>

        {done ? (
          <Done role="status">
            <Check size={18} aria-hidden /> Thanks — you&rsquo;re subscribed.
          </Done>
        ) : (
          <Form onSubmit={submit} noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!error}
              aria-describedby={error ? "newsletter-error" : undefined}
            />
            <Button type="submit" $variant="dark" $size="lg">
              Subscribe <ArrowRight aria-hidden />
            </Button>
            {error && <Err id="newsletter-error">{error}</Err>}
          </Form>
        )}
        <Fine>No spam. Unsubscribe in one click.</Fine>
      </Card>
    </Section>
  );
};

const Section = styled.section`
  ${container};
  ${sectionY};
  padding-top: clamp(6rem, 10vw, 9rem);
  position: relative;
`;

const Card = styled.div<{ $in: boolean }>`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "copy form"
    "copy fine";
  gap: 1rem clamp(2rem, 5vw, 5rem);
  align-items: center;
  padding: clamp(2rem, 5vw, 4rem);
  border-radius: var(--radius-lg);
  background: var(--olive-tint);
  border: 1px solid rgb(var(--olive-rgb) / 0.18);
  ${({ $in }) => reveal($in)};

  ${mq.md} {
    grid-template-columns: 1fr;
    grid-template-areas: "copy" "form" "fine";
  }
`;

/* sits behind the card; its feet are hidden by the card's top edge */
const Peek = styled.div<{ $in: boolean }>`
  position: absolute;
  z-index: 0;
  right: clamp(1.5rem, 8vw, 7rem);
  top: clamp(6rem, 10vw, 9rem);
  translate: 0 -78%;
  transform: translateY(${({ $in }) => ($in ? "0" : "60%")});
  transition: transform 1.1s var(--ease-out) 0.35s;

  ${mq.sm} {
    right: 1.5rem;
    > div {
      width: 110px !important;
    }
  }
`;

const Copy = styled.div`
  grid-area: copy;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    ${h2};
    font-size: clamp(2rem, 1.5rem + 2vw, 3rem);
  }
  em {
    font-style: italic;
    color: var(--olive);
  }
  p {
    color: var(--ink-2);
    max-width: 38ch;
  }
`;

const Form = styled.form`
  grid-area: form;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-self: end;

  input {
    flex: 1 1 220px;
    min-width: 0;
    padding: 1rem 1.1rem;
    border-radius: var(--radius-sm);
    border: 1px solid var(--line-strong);
    background: var(--surface);
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: var(--olive);
      box-shadow: 0 0 0 3px rgb(var(--olive-rgb) / 0.18);
    }
    &[aria-invalid="true"] {
      border-color: var(--danger);
    }
  }
`;

const Err = styled.p`
  flex-basis: 100%;
  font-size: 0.875rem;
  color: var(--danger);
`;

const Done = styled.p`
  grid-area: form;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--olive-600);
`;

const Fine = styled.p`
  grid-area: fine;
  align-self: start;
  font-size: 0.8125rem;
  color: var(--muted);
`;
