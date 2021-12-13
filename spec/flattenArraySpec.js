describe("Flatten Array", function () {
  const flattenArray = require("../src/flatten-array/flattenArray");
  it("return array [1,2,3,4] for nested array [1,[2,[3,[4]]]]", function () {
    expect(flattenArray([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });
  it("works for flat arrays", function () {
    expect(flattenArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});
