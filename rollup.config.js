import ts from "rollup-plugin-ts";
import postcss from "rollup-plugin-postcss";

export default {
  input: "./src/index.ts",
  output: {
    dir: "./build",
    format: "es",
  },
  external: ["react/jsx-runtime"],
  plugins: [
    postcss({
      namedExports: true,
      extract: true,
      modules: true,
      autoModules: true,
    }),
    ts(),
  ],
};
