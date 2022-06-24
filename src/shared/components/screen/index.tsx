import { memo, ReactNode } from "react";

import * as ScreenLib from "./lib";

interface IScreen {
  children: ReactNode;
}

export const Screen = memo(({ children }: IScreen) => {
  return (
    <ScreenLib.Wrapper>
      <ScreenLib.Inner>{children}</ScreenLib.Inner>
    </ScreenLib.Wrapper>
  );
});
