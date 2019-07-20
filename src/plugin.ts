import { PluginObj, types as t } from "@babel/core";
import { NodePath } from "@babel/traverse";
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
