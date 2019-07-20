import { transform } from "@babel/core";
import pluginSyntaxJsx from "@babel/plugin-syntax-jsx";
import plugin from "./plugin";
import { State } from "./types";

export default (code: string): { code: string; state: State } => {
  const state: State = {
    idCount: 0,
  };

  const babelResult = transform(code, {
    sourceType: "script",
    plugins: [pluginSyntaxJsx, plugin(state)],
  });

  if (babelResult == null || babelResult.code == null) {
    throw new Error("Error transforming code");
  }

  return { code: babelResult.code, state };
};
