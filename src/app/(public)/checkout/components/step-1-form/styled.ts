import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const FormCard = styled.div<{ $disabled?: boolean }>`
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  @media (max-width: 600px) {
    padding: 24px 20px;
    border-radius: 16px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--line);
  padding-bottom: 20px;
  margin-bottom: 24px;
`;

export const DeliveryCardHeader = styled(CardHeader)`
  margin-top: 16px;
`;

export const CardTitle = styled.h2`
  font-family: var(--font-display);
  font-variation-settings: "opsz" 36;
  font-size: 1.375rem;
  font-weight: 500;
  color: var(--ink);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: var(--olive);
  }
`;

export const CardHeaderBadge = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: var(--olive);
  background: rgb(var(--olive-rgb) / 0.08);
  padding: 4px 10px;
  border-radius: 20px;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

export const ToggleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  background: rgb(var(--olive-rgb) / 0.06);
  padding: 6px;
  border-radius: 14px;
  border: 1px solid rgb(var(--olive-rgb) / 0.08);
  margin-bottom: 24px;
`;

export const ToggleButton = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "#ffffff" : "transparent")};
  border: none;
  padding: 12px;
  border-radius: var(--radius-sm);
  font-size: 13px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? "var(--olive)" : "var(--muted)")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: ${({ $active }) =>
    $active ? "0 8px 16px rgb(var(--olive-rgb) / 0.1)" : "none"};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    color: var(--olive);
    background: ${({ $active }) => ($active ? "#ffffff" : "rgba(255, 255, 255, 0.3)")};
  }
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  grid-column: ${({ $fullWidth }) => ($fullWidth ? "span 2" : "auto")};

  @media (max-width: 600px) {
    grid-column: span 1;
  }
`;

export const FieldLabel = styled.label`
  font-size: 11px;
  font-weight: 700;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 16px;
  color: var(--muted-2);
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: 16px;
`;

export const FormInput = styled.input<{ $hasIcon?: boolean }>`
  width: 100%;
  padding: 14px 16px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? "44px" : "16px")};
  background: rgba(255, 255, 255, 0.6);
  border: 1.5px solid rgb(var(--olive-rgb) / 0.12);
  border-radius: 12px;
  font-size: 13px;
  color: var(--ink);
  font-weight: 600;
  outline: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &::placeholder {
    color: var(--muted-2);
    font-weight: 500;
  }

  &:hover {
    border-color: rgb(var(--olive-rgb) / 0.3);
    background: rgba(255, 255, 255, 0.9);
  }

  &:focus {
    border-color: var(--olive);
    background: #ffffff;
    box-shadow: 0 0 0 4px rgb(var(--olive-rgb) / 0.1);
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.6);
  border: 1.5px solid rgb(var(--olive-rgb) / 0.12);
  border-radius: 12px;
  font-size: 13px;
  color: var(--ink);
  font-weight: 600;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%237e7c2a' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position: right 16px center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgb(var(--olive-rgb) / 0.3);
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:focus {
    border-color: var(--olive);
    background-color: #ffffff;
    box-shadow: 0 0 0 4px rgb(var(--olive-rgb) / 0.1);
  }
`;

export const CheckboxGroup = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  font-size: 13px;
  color: var(--ink);
  font-weight: 600;
  margin-top: 8px;

  input {
    margin-top: 3px;
    accent-color: var(--olive);
    cursor: pointer;
    width: 15px;
    height: 15px;
  }
`;

export const CheckboxLabelText = styled.span`
  color: var(--ink);
`;

export const ErrorMessage = styled.span`
  font-size: 11px;
  color: var(--danger);
  font-weight: 600;
`;

export const PickupStoreCard = styled.div`
  background: rgb(var(--olive-rgb) / 0.05);
  border: 1.5px solid rgb(var(--olive-rgb) / 0.33);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${fadeIn} 0.4s ease-out;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: var(--ink);
    margin: 0;
  }

  p {
    font-size: 13px;
    font-weight: 500;
    color: var(--ink);
    line-height: 1.5;
    margin: 0;
  }

  p.pickup-time {
    color: var(--olive);
    font-size: 12px;
    font-weight: 700;
  }

  span.badge {
    font-size: 11px;
    font-weight: 700;
    color: var(--success);
    background: rgba(73, 106, 53, 0.08);
    padding: 2px 8px;
    border-radius: 6px;
    align-self: flex-start;
  }
`;

export const ActionButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 60px;
  border: 1.5px solid var(--olive);
  border-radius: var(--radius-sm);
  background: var(--olive);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 20px rgba(27, 22, 18, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  position: relative;
  overflow: hidden;

  &:hover {
    background: var(--olive);
    border-color: var(--olive);
    color: #ffffff;
    box-shadow: 0 12px 25px rgb(var(--olive-rgb) / 0.2);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const FormActionButton = styled(ActionButton)`
  margin-top: 32px;
`;
