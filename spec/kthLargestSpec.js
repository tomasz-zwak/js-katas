describe("k'th largest element", function () {
  const kthLargest = require("../src/kth-largest-element-in-array/kthLargest");
  it("is null if input incorrect", function () {
    expect(kthLargest("")).toBeNull();
    expect(kthLargest(-1)).toBeNull();
    expect(kthLargest("abc")).toBeNull();
    expect(kthLargest(undefined)).toBeNull();
    expect(kthLargest(null)).toBeNull();
    expect(kthLargest(true)).toBeNull();
  });
  it("returns correct element", function () {
    expect(kthLargest([3, 1, 2, 1, 4], 3)).toEqual(2);
  });
});
