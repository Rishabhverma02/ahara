import {
  SectionHeadingContainer,
  SectionHeadingTitle,
  SectionSubtitle,
  SectionSubtitleContainer,
  SectionDescription,
} from "./styled";
import { SectionHeadingProps } from "./types";

export const SectionHeading = ({
  title,
  subHeading,
  desc,
  align = "left",
}: SectionHeadingProps) => {
  return (
    <SectionHeadingContainer $align={align}>
      {subHeading && (
        <SectionSubtitleContainer $align={align}>
          <SectionSubtitle>{subHeading}</SectionSubtitle>
        </SectionSubtitleContainer>
      )}
      <SectionHeadingTitle>{title}</SectionHeadingTitle>
      {desc && <SectionDescription>{desc}</SectionDescription>}
    </SectionHeadingContainer>
  );
};
