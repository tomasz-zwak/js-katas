describe("Hotel Room ", function () {
  const hotelRoom = require("../src/hotel-room/hotel-room");
  it("returns null if input is null or undefined", function () {
    expect(hotelRoom());
    expect(hotelRoom(null));
    expect(hotelRoom(undefined));
    expect(hotelRoom(""));
  });
  it("returns correct solution: 70", function () {
    expect(hotelRoom()).toEqual(70);
  });
});
