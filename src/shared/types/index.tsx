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

export interface IApiClientParams {
  baseUrl: string;
  token?: string;
}

export interface ICityGeoInput {
  city: string;
  limit?: number;
}

export interface ICityGeo {
  name: string;
  lat: number;
  lon: number;
  country: string;
  local_names: Array<string>;
}

export type ICityGeoOutput = Array<ICityGeo>;

export interface ICityDataCoord {
  lon: number;
  lat: number;
}

export interface ICityDataInput extends ICityDataCoord {}

export interface ICityDataWind {
  speed: number;
  deg: number;
}

export interface ICityDataMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface ICityData {
  coord: ICityDataCoord;
  wind: ICityDataWind;
  id: string;
  main: ICityDataMain;
}

export interface ICityDataOutput extends ICityData {}

export interface ICityInput {
  city: string;
}

export interface ICityOutput extends ICityDataOutput {}
