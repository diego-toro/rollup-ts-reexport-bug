import { jsxs } from 'react/jsx-runtime';

const Bar = ({ lastName }) => {
    return jsxs("h1", { children: ["Bar ", lastName] });
};

var styles = {"title":"Foo-module_title__AiIbf"};

const Foo = ({ name }) => {
    return jsxs("h2", { className: styles.title, children: ["Foo ", name] });
};

export { Bar, Foo };
