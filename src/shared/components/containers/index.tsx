import styled from "styled-components";
import { IBox, IFlexBox, IVerticalBox, IHorizontalBox } from "./types";

export const Box = styled.div<IBox>`
  display: block;
  position: relative;
  background: ${({ background = "transparent" }) => `${background}`};
  border: ${({ border = "none" }) => `${border}`};
  height: ${({ height = "fit-content" }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  margin: ${({ margin }) => `${margin}`};
  padding: ${({ padding }) => `${padding}`};
  overflow: ${({ overflow = "none" }) => `${overflow}`};
  border-radius: ${({ borderRadius = "none" }) => borderRadius};
  min-height: ${({ minHeight }) => minHeight};
`;

export const Row = styled.div<IFlexBox>`
  display: flex;
  position: relative;
  background: ${({ background = "transparent" }) => `${background}`};
  flex: ${({ flex = 1 }) => flex};
  border: ${({ border = "none" }) => `${border}`};
  height: ${({ height = "fit-content" }) => `${height}`};
  margin: ${({ margin }) => `${margin}`};
  padding: ${({ padding }) => `${padding}`};
  width: ${({ width }) => `${width}`};
  align-items: ${({ alignItems = "flex-start" }) => `${alignItems}`};
  justify-content: ${({ justifyContent = "flex-start" }) =>
    `${justifyContent}`};
  overflow: ${({ overflow = "none" }) => `${overflow}`};
  min-height: ${({ minHeight }) => minHeight};
`;

export const Column = styled.div<IFlexBox>`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: ${({ flex = 1 }) => flex};
  background: ${({ background = "transparent" }) => `${background}`};
  border: ${({ border = "none" }) => `${border}`};
  height: ${({ height = "fit-content" }) => `${height}`};
  margin: ${({ margin }) => `${margin}`};
  padding: ${({ padding }) => `${padding}`};
  width: ${({ width }) => `${width}`};
  align-items: ${({ alignItems = "flex-start" }) => `${alignItems}`};
  justify-content: ${({ justifyContent = "flex-start" }) =>
    `${justifyContent}`};
  overflow: ${({ overflow = "none" }) => `${overflow}`};
  min-height: ${({ minHeight }) => minHeight};
`;

export const HorizontalBox = styled.div<IHorizontalBox>`
  display: block;
  background: ${({ background = "transparent" }) => `${background}`};
  width: ${({ width }) => `${width}px`};
`;

export const VerticalBox = styled.div<IVerticalBox>`
  display: block;
  background: ${({ background = "transparent" }) => `${background}`};
  height: ${({ height }) => `${height}px`};
`;
