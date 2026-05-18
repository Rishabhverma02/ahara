export interface SectionHeadingProps {
  title?: string;
  desc?: string;
  subHeading?: string;
  align?: Alignment;
}
export type Alignment = "left" | "center" | "right";