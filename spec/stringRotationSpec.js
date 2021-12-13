describe("String Rotation: ", function () {
  const stringRotation = require("../src/string-rotation/stringRotation");
  it("ABCD is a rotation of BCDA", function () {
    expect(stringRotation("ABCD", "BCDA")).toBeTruthy();
  });
  it("KGTMN is a rotation of GTMNK", function () {
    expect(stringRotation("KGTMN", "GTMNK")).toBeTruthy();
  });
  it("fails if string is not a rotation", function () {
    expect(stringRotation("dupa", "duap")).toBeFalsy();
    expect(stringRotation("sadpepe.png", "sadpepe")).toBeFalsy();
    expect(stringRotation(1, 0)).toBeFalsy();
  });
});
