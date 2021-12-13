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
        fn();
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

module.exports = Debounce;
