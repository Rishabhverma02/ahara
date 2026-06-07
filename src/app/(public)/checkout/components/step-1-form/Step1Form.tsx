"use client";

import React from "react";
import {
  User,
  Mail,
  Truck,
  Building,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
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
import { useCheckout } from "../../useCheckout";

export const Step1Form = () => {
  const {
    email,
    setEmail,
    marketingOptIn,
    setMarketingOptIn,
    deliveryMode,
    setDeliveryMode,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    apartment,
    setApartment,
    city,
    setCity,
    state,
    setState,
    pinCode,
    setPinCode,
    phone,
    setPhone,
    errors,
    setErrors,
    playClickSound,
    handleGoToPayment,
  } = useCheckout();

  return (
    <form onSubmit={handleGoToPayment}>
      <FormCard>
        <CardHeader>
          <CardTitle>
            <User size={18} /> Contact Information
          </CardTitle>
          <CardHeaderBadge>Step 1 of 2</CardHeaderBadge>
        </CardHeader>

        <ContactInfoContainer>
          <InputGroup $fullWidth>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <InputWrapper>
              <InputIcon>
                <Mail />
              </InputIcon>
              <FormInput
                id="email"
                type="email"
                placeholder="e.g. rishabh@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email)
                    setErrors((prev) => ({ ...prev, email: "" }));
                }}
                $hasIcon
              />
            </InputWrapper>
            {errors.email && (
              <ErrorMessage>
                {errors.email}
              </ErrorMessage>
            )}
          </InputGroup>

          <CheckboxGroup>
            <input
              type="checkbox"
              checked={marketingOptIn}
              onChange={(e) => setMarketingOptIn(e.target.checked)}
            />
            <CheckboxLabelText>
              Email me with exclusive wellness offers, recipes, and clean label insights
            </CheckboxLabelText>
          </CheckboxGroup>
        </ContactInfoContainer>

        <DeliveryCardHeader>
          <CardTitle>
            <Truck size={18} /> Delivery Options
          </CardTitle>
        </DeliveryCardHeader>

        <ToggleContainer>
          <ToggleButton
            type="button"
            $active={deliveryMode === "ship"}
            onClick={() => {
              playClickSound();
              setDeliveryMode("ship");
            }}
          >
            <Truck size={14} /> Ship to Address
          </ToggleButton>
          <ToggleButton
            type="button"
            $active={deliveryMode === "pickup"}
            onClick={() => {
              playClickSound();
              setDeliveryMode("pickup");
            }}
          >
            <Building size={14} /> Store Pickup
          </ToggleButton>
        </ToggleContainer>

        {deliveryMode === "ship" ? (
          <InputGrid>
            <InputGroup>
              <FieldLabel htmlFor="firstName">First Name</FieldLabel>
              <FormInput
                id="firstName"
                type="text"
                placeholder="Rishabh"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  if (errors.firstName)
                    setErrors((prev) => ({
                      ...prev,
                      firstName: "",
                    }));
                }}
              />
              {errors.firstName && (
                <ErrorMessage>
                  {errors.firstName}
                </ErrorMessage>
              )}
            </InputGroup>

            <InputGroup>
              <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
              <FormInput
                id="lastName"
                type="text"
                placeholder="Verma"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  if (errors.lastName)
                    setErrors((prev) => ({
                      ...prev,
                      lastName: "",
                    }));
                }}
              />
              {errors.lastName && (
                <ErrorMessage>
                  {errors.lastName}
                </ErrorMessage>
              )}
            </InputGroup>

            <InputGroup $fullWidth>
              <FieldLabel htmlFor="address">Shipping Address</FieldLabel>
              <InputWrapper>
                <InputIcon>
                  <MapPin />
                </InputIcon>
                <FormInput
                  id="address"
                  type="text"
                  placeholder="Flat/House No, Building, Street, Area"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    if (errors.address)
                      setErrors((prev) => ({
                        ...prev,
                        address: "",
                      }));
                  }}
                  $hasIcon
                />
              </InputWrapper>
              {errors.address && (
                <ErrorMessage>
                  {errors.address}
                </ErrorMessage>
              )}
            </InputGroup>

            <InputGroup $fullWidth>
              <FieldLabel htmlFor="apartment">
                Apartment, Suite, Unit (Optional)
              </FieldLabel>
              <FormInput
                id="apartment"
                type="text"
                placeholder="e.g. Floor 2, Suite 201"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <FormInput
                id="city"
                type="text"
                placeholder="Jaora"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  if (errors.city)
                    setErrors((prev) => ({ ...prev, city: "" }));
                }}
              />
              {errors.city && (
                <ErrorMessage>
                  {errors.city}
                </ErrorMessage>
              )}
            </InputGroup>

            <InputGroup>
              <FieldLabel htmlFor="state">State</FieldLabel>
              <FormSelect
                id="state"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  if (errors.state)
                    setErrors((prev) => ({ ...prev, state: "" }));
                }}
              >
                <option value="">Select State</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </FormSelect>
              {errors.state && (
                <ErrorMessage>
                  {errors.state}
                </ErrorMessage>
              )}
            </InputGroup>

            <InputGroup>
              <FieldLabel htmlFor="pinCode">PIN Code</FieldLabel>
              <FormInput
                id="pinCode"
                type="text"
                placeholder="457226"
                maxLength={6}
                value={pinCode}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  setPinCode(val);
                  if (errors.pinCode)
                    setErrors((prev) => ({ ...prev, pinCode: "" }));
                }}
              />
              {errors.pinCode && (
                <ErrorMessage>
                  {errors.pinCode}
                </ErrorMessage>
              )}
            </InputGroup>

            <InputGroup>
              <FieldLabel htmlFor="phone">Mobile Phone</FieldLabel>
              <InputWrapper>
                <InputIcon>
                  <Phone />
                </InputIcon>
                <FormInput
                  id="phone"
                  type="tel"
                  placeholder="10-digit number"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setPhone(val);
                    if (errors.phone)
                      setErrors((prev) => ({ ...prev, phone: "" }));
                  }}
                  $hasIcon
                />
              </InputWrapper>
              {errors.phone && (
                <ErrorMessage>
                  {errors.phone}
                </ErrorMessage>
              )}
            </InputGroup>
          </InputGrid>
        ) : (
          <PickupStoreCard>
            <h3>Ahara Wellness HQ Office</h3>
            <p>Somwariya Bazar, Jaora, Madhya Pradesh, 457226, India</p>
            <p className="pickup-time">
              Ready for collection in 2-4 days (Mon-Sat, 10 AM - 7 PM)
            </p>
            <span className="badge">FREE PICKUP</span>
          </PickupStoreCard>
        )}

        <FormActionButton type="submit">
          Continue to Payment <ArrowRight size={16} />
        </FormActionButton>
      </FormCard>
    </form>
  );
};
