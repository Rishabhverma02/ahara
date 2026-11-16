"use client";

import type { IconType } from "react-icons";
import {
  MdAutoAwesome,
  MdFavoriteBorder,
  MdOutlineDiversity1,
  MdOutlineEmojiFoodBeverage,
  MdOutlineGppGood,
  MdOutlineHttps,
  MdOutlineLocalMall,
  MdOutlineLocalOffer,
  MdOutlineLocalShipping,
  MdOutlineLock,
} from "react-icons/md";

/**
 * Drop-in replacements for the MUI two-tone icons the original design used,
 * without shipping MUI + Emotion. Same Material icon family; sizing behaves like
 * MUI's SvgIcon: 1.5rem by default, overridable by a parent `svg { font-size }`
 * rule or an `sx={{ fontSize }}` prop.
 */
type Props = {
  className?: string;
  sx?: { fontSize?: number | string };
  style?: React.CSSProperties;
};

const make = (Icon: IconType, name: string) => {
  const Wrapped = ({ className, sx, style }: Props) => (
    <Icon
      size="1em"
      aria-hidden
      className={["md-icon", className].filter(Boolean).join(" ")}
      style={sx?.fontSize !== undefined ? { fontSize: sx.fontSize, ...style } : style}
    />
  );
  Wrapped.displayName = name;
  return Wrapped;
};

export const LocalShippingTwoToneIcon = make(MdOutlineLocalShipping, "LocalShipping");
export const LocalOfferTwoToneIcon = make(MdOutlineLocalOffer, "LocalOffer");
export const AutoAwesomeTwoToneIcon = make(MdAutoAwesome, "AutoAwesome");
export const HttpsTwoToneIcon = make(MdOutlineHttps, "Https");
export const LocalMallTwoToneIcon = make(MdOutlineLocalMall, "LocalMall");
export const LockTwoToneIcon = make(MdOutlineLock, "Lock");
export const GppGoodTwoToneIcon = make(MdOutlineGppGood, "GppGood");
export const FavoriteTwoToneIcon = make(MdFavoriteBorder, "Favorite");
export const Diversity1TwoToneIcon = make(MdOutlineDiversity1, "Diversity1");
export const EmojiFoodBeverageTwoToneIcon = make(MdOutlineEmojiFoodBeverage, "EmojiFoodBeverage");
