"use client";

import React from "react";
import Image from "next/image";
import { Truck } from "lucide-react";
import { formatINR } from "@/src/lib/pricing";
import truckImg from "@/src/assets/images/illustration/Ahar_Truck-Left.webp";
import { useCartPage, FREE_SHIPPING_THRESHOLD } from "../../useCartPage";
import {
  ShippingProgressContainer,
  ShippingProgressText,
  ProgressBarWrapper,
  ProgressBarFill,
  RewardCheckpoint,
  FireRewardPopup,
  TruckProgressMarker,
} from "./styled";

export const CartProgress = () => {
  const {
    cartTotal,
    isFreeShipping,
    animatedPercent,
    rewardCopied,
    handleCollectReward,
  } = useCartPage();

  return (
    <ShippingProgressContainer>
      <ShippingProgressText>
        <Truck aria-hidden />
        {isFreeShipping ? (
          <span>
            You&rsquo;ve unlocked <strong>free delivery</strong>.
          </span>
        ) : (
          <>
            Add <span>{formatINR(FREE_SHIPPING_THRESHOLD - cartTotal)}</span> more for{" "}
            <strong>free delivery</strong>
          </>
        )}
      </ShippingProgressText>
      <ProgressBarWrapper>
        <ProgressBarFill $percent={animatedPercent} />
        <RewardCheckpoint $percent={animatedPercent} />
        <TruckProgressMarker $percent={animatedPercent}>
          {animatedPercent >= 50 && (
            <FireRewardPopup type="button" onClick={handleCollectReward}>
              {rewardCopied
                ? "Code applied ✓"
                : "Tap to unlock 10% off"}
            </FireRewardPopup>
          )}
          <Image src={truckImg} alt="" fill sizes="64px" />
        </TruckProgressMarker>
      </ProgressBarWrapper>
    </ShippingProgressContainer>
  );
};
