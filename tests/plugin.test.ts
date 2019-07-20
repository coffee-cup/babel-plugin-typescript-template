import transpile from "../src/transpiler";

describe("plugin test", () => {
  it("should count number of identifiers", () => {
    const code = `
const x = 1;
const y = x + 1`;

    expect(transpile(code).state.idCount).toBe(3);
  });

  it("should reverse all identifiers", () => {
    const code = `const hello = world;`;

    expect(transpile(code).code).toBe("const olleh = dlrow;");
  });
});
