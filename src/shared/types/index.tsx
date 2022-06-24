export interface IRoute {
  element: React.ReactElement;
  path: string;
}

export enum FontTypes {
  h1 = "h1",
  h2 = "h2",
  medium = "medium",
  small = "small",
}

export type FontType =
  | typeof FontTypes.h2
  | typeof FontTypes.h1
  | typeof FontTypes.medium
  | typeof FontTypes.small;
