"use client";

import { X } from "lucide-react";
import { useToastStore } from "@/src/store/useToastStore";
import { Region, Item, Icon, Body, Action, Close } from "./styled";

/**
 * App-wide toast region, styled after the original design's success snackbar
 * (white card, green left border, "Success:" label). One shared component
 * instead of an MUI <Snackbar> portal copied into each product surface.
 */
export const Toaster = () => {
  const toasts = useToastStore((s) => s.toasts);
  const dismiss = useToastStore((s) => s.dismiss);

  return (
    <Region role="status" aria-live="polite">
      {toasts.map((t) => (
        <Item key={t.id}>
          <Icon aria-hidden>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </Icon>
          <Body>
            <strong>{t.title}:</strong>
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
