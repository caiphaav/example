import { ThemeContext } from "styled-components";
import { useContext } from "react";

import { ITheme } from "../types";

export const useStyledTheme = () => {
  const context = useContext<ITheme>(ThemeContext);

  if (!context) {
    throw new Error("Theme context is not defined!");
  }

  return context;
};
