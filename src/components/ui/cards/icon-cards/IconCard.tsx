import React from "react";
import {
  Card,
  ImageWrapper,
  TagsContainer,
  Tag,
  Title,
  Subtitle,
  Description,
} from "./styled";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export const IconCard = ({
  image,
  title,
  subtitle,
  description,
  tags,
}: CardProps) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={image} alt="title" width={100} height={100} />
      </ImageWrapper>

      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>

      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
    </Card>
  );
};
