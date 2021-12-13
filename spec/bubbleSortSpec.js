describe("Bubble sort", function () {
  const bubbleSort = require("../src/bubble-sort/bubbleSort");
  it("returns sorted array [1,2,3,4] when given unsorted array [4,3,2,1]", function () {
    expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });
});
