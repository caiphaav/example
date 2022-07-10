import { useEffect, useState } from "react";

import { SharedComponents, SharedTypes, Theme, Client } from "@shared";

export const Home = () => {
  const {
    spacing: { md, xl },
  } = Theme.useStyledTheme();

  const { fetchCity } = Client;

  const [isLoading, setLoading] = useState(true);
  const [cityData, setCityData] = useState<SharedTypes.ICityData | undefined>(
    undefined
  );

  useEffect(() => {
    const init = async () => {
      const cityData = await fetchCity({ city: "Minsk" });
      setCityData(cityData);
      setLoading(false);
      console.log({ cityData });
    };
    init();
  }, [fetchCity]);

  if (isLoading || !cityData) {
    return (
      <SharedComponents.Screen>
        <SharedComponents.Text text={"Loading..."} />
      </SharedComponents.Screen>
    );
  }

  return (
    <SharedComponents.Screen>
      <SharedComponents.Column>
        <SharedComponents.Text type={SharedTypes.FontTypes.h1} text={"Home"} />
        <SharedComponents.VerticalBox height={xl} />
        <SharedComponents.Text text={`Город: ${cityData.id}`} />
        <SharedComponents.VerticalBox height={md} />
        <input />
        <SharedComponents.VerticalBox height={xl} />
        <SharedComponents.Text
          text={"Погода сейчас:"}
          type={SharedTypes.FontTypes.h2}
        />
        <SharedComponents.Text text={cityData.main.temp.toString()} />
      </SharedComponents.Column>
    </SharedComponents.Screen>
  );
};
