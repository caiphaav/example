import { ITheme } from "./types";

export const lightTheme: ITheme = {
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 44,
  },
  typography: {
    h1: {
      fontSize: "1.5rem",
      fontWeight: "700",
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: "500",
    },
    medium: {
      fontSize: "1rem",
      fontWeight: "400",
    },
    small: {
      fontSize: "0.875rem",
      fontWeight: "400",
    },
  },
  palette: {
    dark: "#000",
    light: "#fff",
    primary: "#042940",
    secondary: "#005C53",
  },
};
