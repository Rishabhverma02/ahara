"use client";

import { useState } from "react";
import { toast } from "@/src/store/useToastStore";

/** Shared newsletter sign-up logic (home "Join Our Community" + footer). */
export function useNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Couldn't subscribe right now.");
      setStatus("done");
      setEmail("");
      toast("Success", "You're on the list — watch your inbox for recipes and launches.");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Couldn't subscribe right now.");
    }
  };

  return { email, setEmail, status, error, submit };
}
