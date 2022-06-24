export type FontWeightType = "700" | "500" | "400";

export interface ITypographyItem {
  fontSize: string;
  fontWeight: FontWeightType;
}

export interface ITheme {
  spacing: {
    sm: number;
    md: number;
    lg: number;
  };
  typography: {
    h1: ITypographyItem;
    h2: ITypographyItem;
    medium: ITypographyItem;
    small: ITypographyItem;
  };
  palette: {
    dark: string;
    light: string;
    primary: string;
    secondary: string;
  };
}
