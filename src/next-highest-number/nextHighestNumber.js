function nextHighestNumber(n) {
  let next = n + 1;
  while (!matchingDigits(n, next)) {
    next += 1;
  }
  return next;
}

function matchingDigits(n1, n2) {
  const n1CharArray = charArray(n1.toString());
  const n2CharArray = charArray(n2.toString());
  return (
    n1CharArray.every((c) => n2CharArray.includes(c)) &&
    n2CharArray.every((c) => n1CharArray.includes(c))
  );
}

function charArray(input) {
  return input.split("");
}

module.exports = nextHighestNumber;
