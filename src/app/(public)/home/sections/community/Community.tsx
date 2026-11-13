"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button, Mascot } from "@/src/components/ui";
import { useInView } from "@/src/hooks/useInView";
import { toast } from "@/src/store/useToastStore";
import { Section, Card, Peek, Copy, Form, Err, Done, Fine } from "./styled";

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
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Couldn't subscribe right now.");
      setDone(true);
      toast("You're on the list", "Watch your inbox for recipes and early access to Kairo.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Couldn't subscribe right now.");
    } finally {
      setSending(false);
    }
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
          <p>
            One thoughtful email a fortnight — new flavours before they launch, seasonal recipes, and early
            access to Kairo.
          </p>
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
            <Button type="submit" $variant="dark" $size="lg" disabled={sending} aria-busy={sending}>
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

/* sits behind the card; its feet are hidden by the card's top edge */
