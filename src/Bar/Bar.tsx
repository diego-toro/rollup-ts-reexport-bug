import { FC } from "react";

interface BarProps {
  lastName: string;
}

const Bar: FC<BarProps> = ({ lastName }) => {
  return <h1>Bar {lastName}</h1>;
};

export default Bar;
