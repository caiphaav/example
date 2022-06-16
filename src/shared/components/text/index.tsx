import { FC } from "react";

interface IText {
  text: string;
}

export const Text: FC<IText> = ({ text }) => {
  return <p>{text}</p>;
};
