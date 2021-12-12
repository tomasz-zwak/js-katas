describe("Next highest number", function () {
  const nextHighestNumber = require("../src/next-highest-number/nextHighestNumber");
  it("returns correct value", function () {
    expect(nextHighestNumber(1234)).toEqual(1243);
  });
});
