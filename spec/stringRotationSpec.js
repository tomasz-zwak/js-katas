describe("String Rotation: ", function () {
  const stringRotation = require("../src/string-rotation/stringRotation");
  it("ABCD is a rotation of BCDA", function () {
    expect(stringRotation("ABCD", "BCDA")).toBeTruthy();
  });
});
