"use client";

import { Check, X } from "lucide-react";
import { useToastStore } from "@/src/store/useToastStore";
import { Region, Item, Icon, Body, Action, Close } from "./styled";

/**
 * App-wide toast region. Replaces two copies of an MUI <Snackbar> portal with
 * ~40 lines of inline styles each (and the whole MUI + Emotion runtime).
 */
export const Toaster = () => {
  const toasts = useToastStore((s) => s.toasts);
  const dismiss = useToastStore((s) => s.dismiss);

  return (
    <Region role="status" aria-live="polite">
      {toasts.map((t) => (
        <Item key={t.id}>
          <Icon aria-hidden>
            <Check size={14} strokeWidth={3} />
          </Icon>
          <Body>
            <strong>{t.title}</strong>
            {t.body && <span>{t.body}</span>}
            {t.action && (
              <Action
                type="button"
                onClick={() => {
                  t.action?.onClick();
                  dismiss(t.id);
                }}
              >
                {t.action.label}
              </Action>
            )}
          </Body>
          <Close onClick={() => dismiss(t.id)} aria-label="Dismiss notification">
            <X size={16} />
          </Close>
        </Item>
      ))}
    </Region>
  );
};
