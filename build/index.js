import { jsxs } from 'react/jsx-runtime';

const Bar = ({ lastName }) => {
    return jsxs("h1", { children: ["Bar ", lastName] });
};

const Foo = ({ name }) => {
    return jsxs("h2", { children: ["Foo ", name] });
};

export { Bar, Foo };
