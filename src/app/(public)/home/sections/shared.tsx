"use client";

import styled from "styled-components";

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

const DotRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 1.5rem;

  button {
    position: relative;
    width: 28px;
    height: 24px;
    border: 0;
    background: none;
    padding: 0;

    &::after {
      content: "";
      position: absolute;
      left: 4px;
      right: 4px;
      top: 11px;
      height: 2px;
      border-radius: 2px;
      background: var(--line-strong);
      transition: background 0.3s;
    }
    &[aria-current="true"]::after {
      background: var(--olive);
    }
  }
`;
