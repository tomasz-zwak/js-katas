function kthLargest(array, k) {
  if (!Array.isArray(array)) return null;
  array.sort();
  return array[k-1];
}

function mergeSort(array, left = 0, right) {
  if (left >= right) return;
  console.log(array, left, right);
  right = array.length - 1;
  const middle = Math.floor(left + (right - left) / 2);
  mergeSort(array.slice(left, middle), left, middle);
  
}

function merge(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeSort([2, 6, 1, 8, 2]));

module.exports = kthLargest;
