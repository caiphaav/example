import { FC, memo } from "react";
import styled from "styled-components";

import { SharedTypes } from "@shared";

interface IParagraph {
  type: SharedTypes.FontType;
}

interface IText {
  text: string;
  type?: SharedTypes.FontType;
}

export const Paragraph = styled.p<IParagraph>`
  font-size: ${({ type, theme }) => theme.typography[type].fontSize};
  font-weight: ${({ type, theme }) => theme.typography[type].fontWeight};
`;

export const Text: FC<IText> = memo(
  ({ text, type = SharedTypes.FontTypes.medium }) => {
    return <Paragraph type={type}>{text}</Paragraph>;
  }
);
