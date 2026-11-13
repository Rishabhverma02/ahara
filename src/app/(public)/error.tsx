"use client";

import { useEffect } from "react";
import { ErrorView } from "@/src/components/feedback/StatusView";

export default function PublicError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // TODO(monitoring): forward to Sentry or similar once configured
    console.error(error);
  }, [error]);

  return <ErrorView reset={reset} />;
}
