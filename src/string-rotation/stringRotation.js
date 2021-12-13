function stringRotation(a, b) {
  [a, b] = toString(a, b);
  return a.length === b.length && (a + a).indexOf(b) > -1;
}

function toString() {
  return [...arguments].map((arg) => arg.toString());
}

module.exports = stringRotation;
