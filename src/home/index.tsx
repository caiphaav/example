import { SharedComponents, SharedTypes, Theme } from "@shared";

export const Home = () => {
  const {
    spacing: { md, xl },
  } = Theme.useStyledTheme();
  return (
    <SharedComponents.Screen>
      <SharedComponents.Column>
        <SharedComponents.Text type={SharedTypes.FontTypes.h1} text={"Home"} />
        <SharedComponents.VerticalBox height={xl} />
        <SharedComponents.Text text={"Выберите город:"} />
        <SharedComponents.VerticalBox height={md} />
        <input />
        <SharedComponents.VerticalBox height={xl} />
        <SharedComponents.Text
          text={"Погода сейчас:"}
          type={SharedTypes.FontTypes.h2}
        />
      </SharedComponents.Column>
    </SharedComponents.Screen>
  );
};
