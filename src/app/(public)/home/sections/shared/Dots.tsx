"use client";

import { DotRow } from "./styled";

/** Pagination dots for snap carousels — real buttons with labels. */
export const Dots = ({
  count,
  index,
  onSelect,
  label,
}: {
  count: number;
  index: number;
  onSelect: (i: number) => void;
  label: string;
}) => (
  <DotRow role="group" aria-label={`${label} pagination`}>
    {Array.from({ length: count }, (_, i) => (
      <button
        key={i}
        type="button"
        aria-label={`Show item ${i + 1} of ${count}`}
        aria-current={i === index}
        onClick={() => onSelect(i)}
      />
    ))}
  </DotRow>
);
