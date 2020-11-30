import { PluginObj, types as t, NodePath } from "@babel/core";
import { State } from "./types";

export default (state: State): PluginObj => ({
  visitor: {
    Identifier(path: NodePath<t.Identifier>) {
      state.idCount += 1;
      path.node.name = path.node.name
        .split("")
        .reverse()
        .join("");
    },
  },
});
