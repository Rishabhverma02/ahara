import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;


const floatAnimation = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -40px) scale(1.15);
  }
  100% {
    transform: translate(-20px, 20px) scale(0.95);
  }
`;

export const BackgroundBlob = styled.div<{ $color: string; $top: string; $left?: string; $right?: string; $size: string; $delay?: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left || "auto"};
  right: ${({ $right }) => $right || "auto"};
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: ${({ $color }) => $color};
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;
  pointer-events: none;
  opacity: 0.85;
  animation: ${floatAnimation} 25s ease-in-out infinite alternate;
  animation-delay: ${({ $delay }) => $delay || "0s"};
`;

export const CheckoutWrapper = styled.div`
  background: linear-gradient(135deg, #fbfaf7 0%, #f6f8ef 50%, #eef1df 100%);
  position: relative;
  overflow-x: clip;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  padding-top: 100px; /* Offset for header */
  isolation: isolate;
`;

export const PageContainer = styled.div`
  width: 100%;
  padding: 40px 48px 80px 48px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 24px 16px 60px 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

/* ─── Breadcrumbs / Steps Timeline ───────────────────────────── */
export const StepsTimeline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto 16px auto;
  user-select: none;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 12px 28px;
  border-radius: 100px;
  border: 1px solid rgba(126, 124, 42, 0.08);
  box-shadow: 0 10px 30px rgba(58, 47, 37, 0.03);
  max-width: fit-content;

  @media (max-width: 600px) {
    gap: 10px;
    padding: 10px 18px;
    border-radius: 20px;
  }
`;

export const TimelineStep = styled.div<{
  $active: boolean;
  $completed: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: ${({ $active, $completed }) =>
    $active ? "#7e7c2a" : $completed ? "#63a33cff" : "#a7a48a"};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  transform: ${({ $active }) => ($active ? "scale(1.05)" : "scale(1)")};

  span.circle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
    border: 2px solid
      ${({ $active, $completed }) =>
        $active ? "#7e7c2a" : $completed ? "#63a33cff" : "#c5c1b0"};
    background: ${({ $active, $completed }) =>
      $active ? "#7e7c2a" : $completed ? "#eef5eb" : "transparent"};
    color: ${({ $active, $completed }) =>
      $active ? "#ffffff" : $completed ? "#63a33cff" : "#a7a48a"};
    box-shadow: ${({ $active }) =>
      $active ? "0 0 12px rgba(126, 124, 42, 0.3)" : "none"};
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @media (max-width: 480px) {
    font-size: 11px;
    span.text {
      display: none; /* Hide text on very small screens for cleanliness */
    }
  }
`;

export const TimelineDivider = styled.div<{ $completed: boolean }>`
  height: 2px;
  width: 60px;
  background: ${({ $completed }) => ($completed ? "#496a35" : "rgba(126, 124, 42, 0.15)")};
  transition: all 0.4s ease;

  @media (max-width: 600px) {
    width: 30px;
  }
`;

/* ─── Grid Layout ────────────────────────────────────────────── */
export const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SummaryColumn = styled.div`
  position: sticky;
  top: 120px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 960px) {
    position: static;
  }
`;

/* ─── Card Container ─────────────────────────────────────────── */
export const FormCard = styled.div<{ $disabled?: boolean }>`
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  border: 2px solid rgba(126, 124, 42, 0.1);
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
  border-bottom: 1.5px solid #fdfaf5;
  padding-bottom: 20px;
  margin-bottom: 24px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 800;
  color: #5f320fff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: #7e7c2a;
  }
`;

export const CardHeaderBadge = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #7e7c2a;
  background: rgba(126, 124, 42, 0.08);
  padding: 4px 10px;
  border-radius: 20px;
`;

/* ─── Toggles & Tab Selectors ────────────────────────────────── */
export const ToggleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  background: rgba(126, 124, 42, 0.06);
  padding: 6px;
  border-radius: 14px;
  border: 1px solid rgba(126, 124, 42, 0.08);
  margin-bottom: 24px;
`;

export const ToggleButton = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "#ffffff" : "transparent")};
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? "#7e7c2a" : "#6c6959")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: ${({ $active }) =>
    $active ? "0 8px 16px rgba(126, 124, 42, 0.1)" : "none"};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    color: #7e7c2a;
    background: ${({ $active }) => ($active ? "#ffffff" : "rgba(255, 255, 255, 0.3)")};
  }
`;

/* ─── Input Fields ───────────────────────────────────────────── */
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
  color: #8a8775;
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
  color: #a7a48a;
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
  border: 1.5px solid rgba(126, 124, 42, 0.12);
  border-radius: 12px;
  font-size: 13px;
  color: #2a241e;
  font-weight: 600;
  outline: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &::placeholder {
    color: #a7a48a;
    font-weight: 500;
  }

  &:hover {
    border-color: rgba(126, 124, 42, 0.3);
    background: rgba(255, 255, 255, 0.9);
  }

  &:focus {
    border-color: #7e7c2a;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(126, 124, 42, 0.1);
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.6);
  border: 1.5px solid rgba(126, 124, 42, 0.12);
  border-radius: 12px;
  font-size: 13px;
  color: #2a241e;
  font-weight: 600;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%237e7c2a' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position: right 16px center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(126, 124, 42, 0.3);
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:focus {
    border-color: #7e7c2a;
    background-color: #ffffff;
    box-shadow: 0 0 0 4px rgba(126, 124, 42, 0.1);
  }
`;

export const CheckboxGroup = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  font-size: 13px;
  color: #3a2f25;
  font-weight: 600;
  margin-top: 8px;

  input {
    margin-top: 3px;
    accent-color: #7e7c2a;
    cursor: pointer;
    width: 15px;
    height: 15px;
  }
`;

/* ─── Cards for Methods (Shipping / Payments) ───────────────── */
export const SelectionGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const OptionCard = styled.div<{ $selected: boolean }>`
  border: 1.5px solid
    ${({ $selected }) => ($selected ? "#7e7c2a" : "rgba(126, 124, 42, 0.12)")};
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
    $selected ? "0 8px 24px rgba(126, 124, 42, 0.08)" : "none"};

  &:hover {
    border-color: #7e7c2a;
    background: rgba(253, 250, 245, 0.95);
    box-shadow: 0 10px 25px rgba(126, 124, 42, 0.08);
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
  border: 2px solid ${({ $selected }) => ($selected ? "#7e7c2a" : "#c5c1b0")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #7e7c2a;
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
    color: #2a241e;
  }

  span.desc {
    font-size: 11px;
    color: #8a8775;
    font-weight: 500;
  }
`;

export const OptionPrice = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: #2a241e;

  span.free {
    color: #496a35;
  }
`;

/* ─── Pickup Address Container ───────────────────────────────── */
export const PickupStoreCard = styled.div`
  background: #7e7d2a0c;
  border: 1.5px solid rgba(126, 125, 42, 0.33);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${fadeIn} 0.4s ease-out;

  h4 {
    font-size: 15px;
    font-weight: 800;
    color: #2a241e;
    margin: 0;
  }

  p {
    font-size: 13px;
    color: #5c5949;
    line-height: 1.5;
    margin: 0;
  }

  span.badge {
    font-size: 11px;
    font-weight: 700;
    color: #496a35;
    background: rgba(73, 106, 53, 0.08);
    padding: 2px 8px;
    border-radius: 6px;
    align-self: flex-start;
  }
`;

/* ─── Payment Details Accordions ────────────────────────────── */
export const PaymentDetailsBox = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1.5px dashed rgba(126, 124, 42, 0.15);
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
    ${({ $active }) => ($active ? "#7e7c2a" : "rgba(126, 124, 42, 0.12)")};
  background: ${({ $active }) => ($active ? "rgba(126, 124, 42, 0.06)" : "rgba(255, 255, 255, 0.65)")};
  backdrop-filter: blur(5px);
  border-radius: 14px;
  padding: 14px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ $active }) => ($active ? "0 8px 20px rgba(126, 124, 42, 0.08)" : "none")};
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
    border-color: #7e7c2a;
    background: ${({ $active }) => ($active ? "rgba(126, 124, 42, 0.08)" : "rgba(253, 250, 245, 0.95)")};
    svg, img {
      opacity: 1;
    }
  }
`;

/* ─── Interactive Credit Card Visual ────────────────────────── */
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
  background: linear-gradient(135deg, #1b1612 0%, #4f4e19 50%, #7e7c2a 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

export const CardBack = styled.div`
  ${cardSides}
  background: linear-gradient(135deg, #7e7c2a 0%, #4f4e19 50%, #1b1612 100%);
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

/* ─── Buttons ────────────────────────────────────────────────── */
export const ActionButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 60px;
  border: 1.5px solid #7e7c2a;
  border-radius: 12px;
  background: #5f320fff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
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
    background: #7e7c2a;
    border-color: #7e7c2a;
    color: #ffffff;
    box-shadow: 0 12px 25px rgba(126, 124, 42, 0.2);
  }

  &:active {
    transform: scale(0.96);
    box-shadow: 0 4px 12px rgba(126, 124, 42, 0.15);
  }

  &:disabled {
    background: #c5c1b0;
    border-color: #c5c1b0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const SecondaryButton = styled.button`
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(10px);
  border: 1.5px solid rgba(126, 124, 42, 0.2);
  color: #7e7c2a;
  height: 60px;
  padding: 0 24px;
  border-radius: 12px;
  font-size: 13.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background: rgba(126, 124, 42, 0.06);
    border-color: #7e7c2a;
  }

  &:active {
    transform: scale(0.98);
  }
`;

/* ─── Sticky Order Summary Card ──────────────────────────────── */
export const StickySummaryCard = styled.div`
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 32px;
  border: 2px solid rgba(126, 124, 42, 0.1);
  box-shadow: 0 20px 40px -15px rgba(58, 47, 37, 0.05),
              0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

`;

export const SummarySectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: #5f320fff;
  margin: 0;
  border-bottom: 1.5px solid #fdfaf5;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span.item-count {
    font-size: 11px;
    font-weight: 700;
    color: #7e7c2a;
    background: rgba(126, 124, 42, 0.08);
    padding: 2px 8px;
    border-radius: 10px;
  }
`;

export const MiniItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 240px;
  overflow-y: auto;
  padding: 8px 6px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const MiniItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 14px;
  border-bottom: 1px dashed rgba(126, 124, 42, 0.12);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const MiniItemImageInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const MiniItemImage = styled.div`
  width: 48px;
  height: 48px;
  background: #fdfaf5;
  border-radius: 8px;
  position: relative;
  border: 1px solid rgba(126, 124, 42, 0.06);
  flex-shrink: 0;

  span.badge {
    position: absolute;
    top: -6px;
    right: -6px;
    background: #7e7c2a;
    color: #ffffff;
    font-size: 10px;
    font-weight: 800;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #ffffff;
    z-index: 5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const MiniItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;

  span.name {
    font-size: 13px;
    font-weight: 700;
    color: #48260bff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span.variant {
    font-size: 10px;
    color: #a7a48a;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const MiniItemPrice = styled.div`
  font-size: 13px;
  font-weight: 800;
  color: #5f320fff;
  text-align: right;
`;

export const CostSummaryRow = styled.div<{
  $isTotal?: boolean;
  $isDiscount?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ $isTotal }) => ($isTotal ? "16px" : "13px")};
  font-weight: ${({ $isTotal }) => ($isTotal ? "800" : "600")};
  color: ${({ $isTotal, $isDiscount }) =>
    $isTotal ? "#5f320fff" : $isDiscount ? "#496a35" : "#6c6959"};

  span.value {
    font-size: ${({ $isTotal }) => ($isTotal ? "20px" : "14px")};
    font-weight: 800;
    color: ${({ $isTotal, $isDiscount }) =>
      $isTotal ? "#5f320fff" : $isDiscount ? "#496a35" : "#48260bff"};
  }
`;

export const TrustBadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid #fdfaf5;
`;

export const TrustBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 700;
  color: #8a8775;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  svg {
    color: #496a35;
    font-size: 16px;
  }
`;
