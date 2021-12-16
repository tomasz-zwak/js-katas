class Debounce {
  constructor() {
    this.list = {};
  }

  add(timeout, fn) {
    this.list[fn] = {
      enabled: false,
    };
    this.list[fn].timeout = setTimeout(() => {
      this.list[fn].enabled = true;
    }, timeout);
    return () => {
      if (this.list[fn].enabled) {
        return fn();
      } else {
        clearTimeout(this.list[fn].timeout);
        this.list[fn].timeout = setTimeout(() => {
          this.list[fn].enabled = true;
        }, timeout);
        return false;
      }
    };
  }
}

const debounce = new Debounce();

const f1 = debounce.add(100, () => {
  return "hello"
});

console.log(f1());
setTimeout(() => {
  console.log(f1());
}, 120);

module.exports = Debounce;
