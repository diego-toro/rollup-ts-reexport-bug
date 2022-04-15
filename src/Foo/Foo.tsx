import { FC } from "react";

interface HelloWorldProps {
  name: string;
}

const Foo: FC<HelloWorldProps> = ({ name }) => {
  return <h2>Foo {name}</h2>;
};

export default Foo;
