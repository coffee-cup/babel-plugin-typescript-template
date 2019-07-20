import * as getStdin from "get-stdin";
import transpile from "./transpiler";

export { transpile };

getStdin()
  .then(code => {
    const transpiledResult = transpile(code);

    console.log(transpiledResult);
  })
  .catch(console.error);
