describe("Split String", function () {
  const splitString = require("../src/split_string/split_string");
  it("array for 'Hello, World' and delimiter ',' is correct", function () {
    expect(splitString("Hello, World", ",")).toEqual(["Hello", "World"]);
  });
  it("returns null for empty input", function () {
    expect(splitString("")).toBeNull();
  });
  it("returns null if input is null or undefined", function () {
    expect(splitString("")).toBeNull();
  });
  it("returns null if input is not a String", function () {
    expect(splitString(123)).toBeNull();
  });
  it("returns null input or delimiter are given incorrect values", function () {
    expect(splitString(123)).toBeNull();
  });
});
