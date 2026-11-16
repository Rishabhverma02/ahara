"use client";

import { LocalShippingTwoToneIcon } from "@/src/components/ui/MaterialIcons";
import React from "react";
import Image from "next/image";
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
  const { cartTotal, isFreeShipping, animatedPercent, rewardCopied, handleCollectReward } = useCartPage();

  return (
    <ShippingProgressContainer>
      <ShippingProgressText>
        <LocalShippingTwoToneIcon />
        {isFreeShipping ? (
          <span>
            Congrats! You have unlocked <strong>Free Delivery</strong>! 🎉
          </span>
        ) : (
          <>
            Add <span>₹{FREE_SHIPPING_THRESHOLD - cartTotal}</span> more to unlock{" "}
            <strong>Free Shipping</strong>
          </>
        )}
      </ShippingProgressText>
      <ProgressBarWrapper>
        <ProgressBarFill $percent={animatedPercent} />
        <RewardCheckpoint $percent={animatedPercent} />
        <TruckProgressMarker $percent={animatedPercent}>
          {animatedPercent >= 50 && (
            <FireRewardPopup onClick={handleCollectReward}>
              {rewardCopied ? "🔥 Copied!" : "🔥 Unlock 10% Off: AHARA10"}
            </FireRewardPopup>
          )}
          <Image src={truckImg} alt="Shipping Truck" fill />
        </TruckProgressMarker>
      </ProgressBarWrapper>
    </ShippingProgressContainer>
  );
};
