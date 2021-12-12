describe("Byte Format", function () {
  const byteFormat = require("../src/byte-format/byteFormat");
  it("should return '7.91 KB' when given 8101 B", function () {
    expect(byteFormat(8101)).toEqual("7.91 KB");
  });
  it("should return '7.911 KB' when given 8101 B and rounding to 3 decimals", function () {
    expect(byteFormat(8101, 3)).toEqual("7.911 KB");
  });
  it("should return '149.57 MB' when given 156833213 B", function () {
    expect(byteFormat(156833213)).toEqual("149.57 MB");
  });
  it("should return '12.042 KB' when given 12331 B and rounding to 3 decimals", function () {
    expect(byteFormat(12331, 3)).toEqual("12.042 KB");
  });
  it("should return null when input is not a number", function () {
    expect(byteFormat("hello")).toBeNull();
  });
  it("should return null when input bytes or decimals arg is a negative number", function () {
    expect(byteFormat(-1)).toBeNull();
    expect(byteFormat(-1, -2)).toBeNull();
    expect(byteFormat(8101, -3)).toBeNull();
    expect(byteFormat(-8101, 3)).toBeNull();
  });
  it("should return null if input is empty, undefined or null", function () {
    expect(byteFormat(null)).toBeNull();
    expect(byteFormat(undefined)).toBeNull();
    expect(byteFormat()).toBeNull();
  });
});
