function flattenArray(array, flatArray = [], index = 0) {
  if (index >= array.length) return;
  if (array[index].length === undefined) {
    flatArray.push(array[index]);
  } else {
      flattenArray(array[index], flatArray, 0)
  }
  flattenArray(array, flatArray, index += 1);
  return flatArray;
}

module.exports = flattenArray;
