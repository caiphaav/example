type IFlexPosition =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-evenly";

type IOverflow = "auto" | "none" | "hidden" | "scroll";

export interface IBox {
  height?: number | string;
  width?: number | string;
  background?: string;
  margin?: number | string;
  padding?: number | string;
  border?: string;
  overflow?: IOverflow;
  minHeight?: number | string;
  borderRadius?: string | number;
}

export interface IFlexBox extends IBox {
  alignItems?: IFlexPosition;
  justifyContent?: IFlexPosition;
  flex?: number;
}

export interface IHorizontalBox {
  width: number;
  background?: string;
}

export interface IVerticalBox {
  height: number;
  background?: string;
}
