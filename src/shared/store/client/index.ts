import { SharedTypes } from "@shared";

class _Client {
  //поле класса
  baseUrl: string;
  token: string;
  // параметры конструктора
  constructor({ baseUrl, token }: SharedTypes.IApiClientParams) {
    if (!token) {
      throw new Error("Api client token is not defined");
    }
    this.baseUrl = baseUrl;
    this.token = token;
  }

  onResponse = async (response: Response) => {
    return await response.json();
  };

  fetchCityGeo = async ({
    city,
    limit = 1,
  }: SharedTypes.ICityGeoInput): Promise<SharedTypes.ICityGeoOutput> => {
    return await this.onResponse(
      await fetch(
        `${this.baseUrl}/geo/1.0/direct?q=${city}&limit=${limit}&appid=${this.token}`
      )
    );
  };

  fetchCityData = async ({
    lat,
    lon,
  }: SharedTypes.ICityDataInput): Promise<SharedTypes.ICityDataOutput> => {
    return await this.onResponse(
      await fetch(
        `${this.baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.token}`
      )
    );
  };

  fetchCity = async ({
    city,
  }: SharedTypes.ICityInput): Promise<SharedTypes.ICityOutput> => {
    const geo = await this.fetchCityGeo({ city });
    if (geo.length === 0) {
      throw new Error("Fetch city error: null data");
    }
    const { lat, lon } = geo[0];
    return await this.fetchCityData({ lat, lon });
  };
}

export const Client = new _Client({
  baseUrl: "http://api.openweathermap.org",
  token: process.env.REACT_APP_API_KEY,
});
