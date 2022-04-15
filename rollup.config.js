import ts from "rollup-plugin-ts";

export default {
  input: "./src/index.ts",
  output: {
    dir: "./build",
    format: "es",
  },
  external: ["react/jsx-runtime"],
  plugins: [ts()],
};
