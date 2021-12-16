describe("Debounce", function () {
  const Debounce = require("../src/debounce/debounce");
  let debounce = null;

  beforeEach(function () {
    debounce = new Debounce();
  });

  it("allows to add new functions with set timeouts", function () {
    debounce.add(100, () => {
      return "hello1"
    });
    debounce.add(120, () => {
      return "hello2"
    });
    debounce.add(140, () => {
      return "hello3"
    });
    expect(Object.keys(debounce.list).length).toEqual(3);
  });
  it("prevents execution of function before timeout", function () {
    const f1 = debounce.add(100, () => {
      return "hello"
    });
    expect(f1()).toBeFalsy();
  });
  it("refreshes timeout value if function was called before timeout finished", function () {
    const f1 = debounce.add(100, () => {
      return "hello"
    });
    jasmine.clock().install();
    jasmine.clock().tick(50);
    expect(f1()).toBeFalsy();
    jasmine.clock().tick(60);
    expect(f1()).toBeFalsy();
    jasmine.clock().tick(120);
    expect(f1()).toBeTruthy();
  });
});
