import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const FormCard = styled.div<{ $disabled?: boolean }>`
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  border: 2px solid rgb(var(--olive-rgb) / 0.1);
  box-shadow: 0 20px 40px -15px rgba(58, 47, 37, 0.05),
              0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
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
  border-bottom: 1.5px solid var(--surface);
  padding-bottom: 20px;
  margin-bottom: 24px;
`;

export const CardTitle = styled.h2`
  font-family: var(--font-display);
  font-variation-settings: "opsz" 36;
  font-size: 18px;
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

export const SelectionGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ShippingSelectionGrid = styled(SelectionGrid)`
  margin-bottom: 32px;
`;

export const OptionCard = styled.div<{ $selected: boolean }>`
  border: 1.5px solid
    ${({ $selected }) => ($selected ? "var(--olive)" : "rgb(var(--olive-rgb) / 0.12)")};
  background: ${({ $selected }) => ($selected ? "rgba(253, 250, 245, 0.85)" : "rgba(255, 255, 255, 0.65)")};
  backdrop-filter: blur(5px);
  border-radius: 16px;
  padding: 18px 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: ${({ $selected }) =>
    $selected ? "0 8px 24px rgb(var(--olive-rgb) / 0.08)" : "none"};

  &:hover {
    border-color: var(--olive);
    background: rgba(253, 250, 245, 0.95);
    box-shadow: 0 10px 25px rgb(var(--olive-rgb) / 0.08);
  }
`;

export const OptionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const OptionRadio = styled.div<{ $selected: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid ${({ $selected }) => ($selected ? "var(--olive)" : "var(--muted-2)")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--olive);
    transform: scale(${({ $selected }) => ($selected ? 1 : 0)});
    transition: transform 0.2s ease;
  }
`;

export const OptionLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span.title {
    font-size: 14px;
    font-weight: 700;
    color: var(--ink);
  }

  span.desc {
    font-size: 11px;
    color: var(--muted);
    font-weight: 500;
  }
`;

export const OptionPrice = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);

  span.free {
    color: var(--success);
  }
`;

export const PickupNoticeText = styled.p`
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 32px;
  font-style: italic;
`;

export const PaymentDetailsBox = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1.5px dashed rgb(var(--olive-rgb) / 0.15);
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${fadeIn} 0.4s ease;
`;

export const UPIOptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const UPILogoButton = styled.button<{ $active: boolean }>`
  border: 2px solid
    ${({ $active }) => ($active ? "var(--olive)" : "rgb(var(--olive-rgb) / 0.12)")};
  background: ${({ $active }) => ($active ? "rgb(var(--olive-rgb) / 0.06)" : "rgba(255, 255, 255, 0.65)")};
  backdrop-filter: blur(5px);
  border-radius: var(--radius-sm);
  padding: 14px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ $active }) => ($active ? "0 8px 20px rgb(var(--olive-rgb) / 0.08)" : "none")};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 54px;

  svg, img {
    height: 24px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    opacity: ${({ $active }) => ($active ? "1" : "0.65")};
    transition: all 0.3s ease;
  }

  &:hover {
    border-color: var(--olive);
    background: ${({ $active }) => ($active ? "rgb(var(--olive-rgb) / 0.08)" : "rgba(253, 250, 245, 0.95)")};
    svg, img {
      opacity: 1;
    }
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

export const FormInput = styled.input`
  width: 100%;
  padding: 14px 16px;
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

export const ErrorMessage = styled.span`
  font-size: 11px;
  color: var(--danger);
  font-weight: 600;
`;

export const CreditCardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  max-width: 320px;
  height: 190px;
  margin: 0 auto 16px auto;
  user-select: none;
`;

export const CreditCardInner = styled.div<{ $isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;
  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const cardSides = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  padding: 20px;
  color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
`;

export const CardFront = styled.div`
  ${cardSides}
  background: linear-gradient(135deg, var(--ink) 0%, var(--olive-600) 50%, var(--olive) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

export const CardBack = styled.div`
  ${cardSides}
  background: linear-gradient(135deg, var(--olive) 0%, var(--olive-600) 50%, var(--ink) 100%);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

export const CardMagneticStrip = styled.div`
  width: 100%;
  height: 40px;
  background: #111;
  margin-top: 10px;
`;

export const CardCVVBox = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  span.label {
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.8;
  }

  div.white-bar {
    width: 100%;
    height: 36px;
    background: #ffffff;
    border-radius: 4px;
    color: #111;
    font-family: "Courier New", Courier, monospace;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 12px;
    letter-spacing: 2px;
  }
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardLogo = styled.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const CardBrandName = styled.div`
  font-size: 11px;
  font-weight: 700;
  opacity: 0.8;
`;

export const CardSecurityNotice = styled.div`
  padding: 0 20px 10px 20px;
  font-size: 8px;
  opacity: 0.6;
  text-align: center;
`;

export const CardChip = styled.div`
  width: 36px;
  height: 28px;
  background: linear-gradient(135deg, #e8d07a 0%, #b89030 100%);
  border-radius: 4px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 26px;
    height: 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
`;

export const CardNumberText = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  font-family: "Courier New", Courier, monospace;
  margin: 16px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;

export const CardHolderName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span.label {
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.7;
  }

  span.value {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
  }
`;

export const CardExpiry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;

  span.label {
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.7;
  }

  span.value {
    font-size: 13px;
    font-weight: 600;
    font-family: "Courier New", Courier, monospace;
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
`;

export const SecondaryButton = styled.button`
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(10px);
  border: 1.5px solid rgb(var(--olive-rgb) / 0.2);
  color: var(--olive);
  height: 60px;
  padding: 0 24px;
  border-radius: var(--radius-sm);
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background: rgb(var(--olive-rgb) / 0.06);
    border-color: var(--olive);
  }

  &:active {
    transform: scale(0.98);
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

export const FormActionsGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  width: 100%;

  button:first-child {
    flex: 1;
  }

  button:last-child {
    flex: 2;
    margin: 0;
  }
`;

export const CODInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgb(var(--olive-rgb) / 0.05);
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 12px;
  color: var(--olive);
  font-weight: 600;
`;
