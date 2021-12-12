describe("Cash Units", function () {
  const cashUnits = require("../src/cash-units/cash-units");
  it("for 0.0 should be correct", function () {
    const cashUnitsObj = {
      1: 0,
      2: 0,
      5: 0,
      10: 0,
      20: 0,
      50: 0,
      100: 0,
      200: 0,
      500: 0,
      0.5: 0,
      0.2: 0,
      0.1: 0,
      0.05: 0,
      0.02: 0,
      0.01: 0,
    };
    expect(cashUnitsObj).toEqual(cashUnits(0.0));
  });
  it("for 1465.79 should be correct", function () {
    const cashUnitsObj = {
      1: 0,
      2: 0,
      5: 1,
      10: 1,
      20: 0,
      50: 1,
      100: 0,
      200: 2,
      500: 2,
      0.5: 1,
      0.2: 1,
      0.1: 0,
      0.05: 1,
      0.02: 2,
      0.01: 0,
    };
    expect(cashUnits(1465.79)).toEqual(cashUnitsObj);
  });
  it("for 1465.79 when given as string should be correct", function () {
    const cashUnitsObj = {
      1: 0,
      2: 0,
      5: 1,
      10: 1,
      20: 0,
      50: 1,
      100: 0,
      200: 2,
      500: 2,
      0.5: 1,
      0.2: 1,
      0.1: 0,
      0.05: 1,
      0.02: 2,
      0.01: 0,
    };
    expect(cashUnits("1465.79")).toEqual(cashUnitsObj);
  });
  it("for string value that's not a number should be null", function () {
    expect(cashUnits("hello")).toBeNull();
  });
  it("for a negative number should be null", function () {
    expect(cashUnits(-333.33)).toBeNull();
  });
  it("for a negative number when given as string should be null", function () {
    expect(cashUnits("-12332.78")).toBeNull();
  });
});
