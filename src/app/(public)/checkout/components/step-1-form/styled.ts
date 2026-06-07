import styled, { keyframes } from "styled-components";

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

export const DeliveryCardHeader = styled(CardHeader)`
  margin-top: 16px;
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

export const CheckboxLabelText = styled.span`
  color: #48260bff;
`;

export const ErrorMessage = styled.span`
  font-size: 11px;
  color: #c0392b;
  font-weight: 600;
`;

export const PickupStoreCard = styled.div`
  background: #7e7d2a0c;
  border: 1.5px solid rgba(126, 125, 42, 0.33);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${fadeIn} 0.4s ease-out;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #48260bff;
    margin: 0;
  }

  p {
    font-size: 13px;
    font-weight: 500;
    color: #5f320fff;
    line-height: 1.5;
    margin: 0;
  }

  p.pickup-time {
    color: #7e7c2a;
    font-size: 12px;
    font-weight: 700;
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
  }
`;

export const FormActionButton = styled(ActionButton)`
  margin-top: 32px;
`;
