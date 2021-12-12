function splitString(input, delimiter) {
  if (!input || !delimiter) return null;
  input = String(input);
  delimiter = String(delimiter);
  const delimitedArray = [];
  let singlePartArray = [];
  for (let index = 0; index < input.length; index++) {
    const c = input.charAt(index).trim();
    if (c.length > 0) {
      if (c === delimiter) {
        delimitedArray.push(singlePartArray.join(""));
        singlePartArray = [];
      } else {
        singlePartArray.push(c);
      }
    }
  }
  if (singlePartArray.length > 0) delimitedArray.push(singlePartArray.join(""));
  return delimitedArray;
}

module.exports = splitString;
