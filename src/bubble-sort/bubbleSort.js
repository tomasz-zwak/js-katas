function bubbleSort(array) {
  let n = array.length;
  do {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let buf = array[i + 1];
        array[i + 1] = array[i];
        array[i] = buf;
      }
    }
    n -= 1;
  } while (n > 1);
  return array;
}

module.exports = bubbleSort;
