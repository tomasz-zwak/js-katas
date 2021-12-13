describe("Debounce", function () {
  const Debounce = require("../src/debounce/debounce");
  let debounce = null;

  beforeEach(function () {
    debounce = new Debounce();
  });

  it("allows to add new functions with set timeouts", function () {
    debounce.add(100, () => {
      console.log("hello1");
    });
    debounce.add(120, () => {
      console.log("hello2");
    });
    debounce.add(140, () => {
      console.log("hello3");
    });
    expect(Object.keys(debounce.list).length).toEqual(3);
  });
  it("prevents execution of function before timeout", function () {
    const f1 = debounce.add(100, () => {
      console.log("hello");
    });
    expect(f1()).toBeFalsy();
  });
  it("refreshes timeout value if function was called before timeout finished", function () {
    const f1 = debounce.add(100, () => {
      console.log("hello");
    });
    setTimeout(() => {
      expect(f1()).toBeFalsy();
    }, 50);
    setTimeout(() => {
      expect(f1()).toBeFalsy();
    }, 60);
    setTimeout(() => {
      expect(f1()).toBeTruthy();
    }, 120);
  });
});
