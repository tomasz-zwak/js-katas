describe("First Non-Repeated Character: ", function () {
  const fnrc = require("../src/first-non-repeated-character/fnrc");
  it("returns null if input is empty, null or undefined", function () {
    expect(fnrc()).toBeNull();
    expect(fnrc(null)).toBeNull();
    expect(fnrc("")).toBeNull();
    expect(fnrc(undefined)).toBeNull();
  });

  it("works correctly for string or numeric inputs", function () {
    expect(fnrc("Hello")).toEqual("l");
    expect(fnrc(`abc ${5554}`)).toEqual("5");
    expect(fnrc("abcdefgtuiiaaaassdd")).toEqual("i");
    expect(fnrc(123445566)).toEqual("4");
    expect(fnrc("nullnull")).toEqual("l");
  });
});
