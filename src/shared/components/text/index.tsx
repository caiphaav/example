import { FC, memo } from "react";
import styled from "styled-components";

import { SharedTypes } from "@shared";

interface IParagraph {
  type: SharedTypes.FontType;
  color?: string;
}

interface IText {
  text: string;
  type?: SharedTypes.FontType;
  color?: string;
}

export const Paragraph = styled.p<IParagraph>`
  font-size: ${({ type, theme }) => theme.typography[type].fontSize};
  font-weight: ${({ type, theme }) => theme.typography[type].fontWeight};
  color: ${({ color }) => color};
`;

export const Text: FC<IText> = memo(
  ({ text, type = SharedTypes.FontTypes.medium, color = "black" }) => {
    return (
      <Paragraph color={color} type={type}>
        {text}
      </Paragraph>
    );
  }
);
