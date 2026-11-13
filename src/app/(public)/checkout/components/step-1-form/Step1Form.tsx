"use client";

import { ArrowRight, Building, Mail, MapPin, Phone, Truck, User } from "lucide-react";
import { INDIAN_STATES } from "@/src/lib/checkout-schema";
import { useCheckoutForm, type CheckoutForm } from "../../useCheckout";
import {
  FormCard,
  CardHeader,
  DeliveryCardHeader,
  CardTitle,
  CardHeaderBadge,
  ContactInfoContainer,
  InputGroup,
  FieldLabel,
  InputWrapper,
  InputIcon,
  FormInput,
  CheckboxGroup,
  CheckboxLabelText,
  ErrorMessage,
  ToggleContainer,
  ToggleButton,
  InputGrid,
  FormSelect,
  PickupStoreCard,
  FormActionButton,
} from "./styled";

type TextField = Exclude<
  keyof CheckoutForm,
  "marketingOptIn" | "deliveryMode" | "shippingMethod" | "paymentMethod"
>;

interface FieldProps {
  name: TextField;
  label: string;
  autoComplete: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
  icon?: React.ReactNode;
  full?: boolean;
  digits?: number;
  optional?: boolean;
}

/** Label + input + error, wired for autofill and screen readers. */
function Field({
  name,
  label,
  autoComplete,
  type = "text",
  inputMode,
  placeholder,
  icon,
  full,
  digits,
  optional,
}: FieldProps) {
  const { form, errors, setField } = useCheckoutForm();
  const error = errors[name];
  const errorId = `${name}-error`;

  const input = (
    <FormInput
      id={name}
      name={name}
      type={type}
      inputMode={inputMode}
      autoComplete={autoComplete}
      placeholder={placeholder}
      maxLength={digits}
      required={!optional}
      value={form[name]}
      onChange={(e) => setField(name, digits ? e.target.value.replace(/\D/g, "") : e.target.value)}
      aria-invalid={!!error}
      aria-describedby={error ? errorId : undefined}
      $hasIcon={!!icon}
    />
  );

  return (
    <InputGroup $fullWidth={full}>
      <FieldLabel htmlFor={name}>
        {label}
        {optional && " (optional)"}
      </FieldLabel>
      {icon ? (
        <InputWrapper>
          <InputIcon aria-hidden>{icon}</InputIcon>
          {input}
        </InputWrapper>
      ) : (
        input
      )}
      {error && (
        <ErrorMessage id={errorId} role="alert">
          {error}
        </ErrorMessage>
      )}
    </InputGroup>
  );
}

export const Step1Form = () => {
  const { form, errors, setField, goToPayment } = useCheckoutForm();

  return (
    <form onSubmit={goToPayment} noValidate>
      <FormCard>
        <CardHeader>
          <CardTitle>
            <User size={18} aria-hidden /> Contact
          </CardTitle>
          <CardHeaderBadge>Step 1 of 2</CardHeaderBadge>
        </CardHeader>

        <ContactInfoContainer>
          <Field
            name="email"
            label="Email address"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            icon={<Mail />}
            full
          />
          <CheckboxGroup>
            <input
              id="marketingOptIn"
              type="checkbox"
              checked={form.marketingOptIn}
              onChange={(e) => setField("marketingOptIn", e.target.checked)}
            />
            <CheckboxLabelText as="label" htmlFor="marketingOptIn">
              Email me recipes, new flavours and occasional offers
            </CheckboxLabelText>
          </CheckboxGroup>
        </ContactInfoContainer>

        <DeliveryCardHeader>
          <CardTitle>
            <Truck size={18} aria-hidden /> Delivery
          </CardTitle>
        </DeliveryCardHeader>

        <ToggleContainer role="radiogroup" aria-label="Delivery method">
          <ToggleButton
            type="button"
            role="radio"
            aria-checked={form.deliveryMode === "ship"}
            $active={form.deliveryMode === "ship"}
            onClick={() => setField("deliveryMode", "ship")}
          >
            <Truck size={14} aria-hidden /> Ship to address
          </ToggleButton>
          <ToggleButton
            type="button"
            role="radio"
            aria-checked={form.deliveryMode === "pickup"}
            $active={form.deliveryMode === "pickup"}
            onClick={() => setField("deliveryMode", "pickup")}
          >
            <Building size={14} aria-hidden /> Store pickup
          </ToggleButton>
        </ToggleContainer>

        {form.deliveryMode === "ship" ? (
          <InputGrid>
            <Field name="firstName" label="First name" autoComplete="shipping given-name" />
            <Field name="lastName" label="Last name" autoComplete="shipping family-name" />
            <Field
              name="address"
              label="Address"
              autoComplete="shipping address-line1"
              placeholder="House no., building, street, area"
              icon={<MapPin />}
              full
            />
            <Field
              name="apartment"
              label="Apartment, floor, landmark"
              autoComplete="shipping address-line2"
              full
              optional
            />
            <Field name="city" label="City" autoComplete="shipping address-level2" />

            <InputGroup>
              <FieldLabel htmlFor="state">State</FieldLabel>
              <FormSelect
                id="state"
                name="state"
                autoComplete="shipping address-level1"
                value={form.state}
                onChange={(e) => setField("state", e.target.value)}
                aria-invalid={!!errors.state}
                aria-describedby={errors.state ? "state-error" : undefined}
              >
                <option value="">Select state</option>
                {INDIAN_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </FormSelect>
              {errors.state && (
                <ErrorMessage id="state-error" role="alert">
                  {errors.state}
                </ErrorMessage>
              )}
            </InputGroup>

            <Field
              name="pinCode"
              label="PIN code"
              autoComplete="shipping postal-code"
              inputMode="numeric"
              digits={6}
            />
            <Field
              name="phone"
              label="Mobile number"
              type="tel"
              autoComplete="shipping tel-national"
              inputMode="tel"
              digits={10}
              icon={<Phone />}
            />
          </InputGrid>
        ) : (
          <PickupStoreCard>
            <h3>Ahara Wellness HQ</h3>
            <p>Somwariya Bazar, Jaora, Madhya Pradesh 457226</p>
            <p className="pickup-time">Ready in 2–4 days · Mon–Sat, 10 AM – 7 PM</p>
            <span className="badge">Free pickup</span>
          </PickupStoreCard>
        )}

        <FormActionButton type="submit">
          Continue to payment <ArrowRight size={16} aria-hidden />
        </FormActionButton>
      </FormCard>
    </form>
  );
};
