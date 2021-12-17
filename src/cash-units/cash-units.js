function floorPrecised(number, precision) {
  var power = Math.pow(10, precision);

  return Math.floor(number * power) / power;
}

function cashUnits(input) {
  let inputValue = parseInt(input);
  if (isNaN(inputValue) || inputValue < 0) return null;
  const units = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];
  const result = {};
  units.forEach((u) => {
    let value = Math.floor(input / u);
    result[`${u}`] = value;
    input = (input - value * u).toFixed(2);
  });
  return result;
}

module.exports = cashUnits;
