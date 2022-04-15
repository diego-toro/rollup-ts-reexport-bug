import { FC } from "react";
import styles from "./Foo.module.scss";

interface HelloWorldProps {
  name: string;
}

const Foo: FC<HelloWorldProps> = ({ name }) => {
  return <h2 className={styles.title}>Foo {name}</h2>;
};

export default Foo;
