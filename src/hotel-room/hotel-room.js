//divisors without the number itself
function divisors(n) {
  const divisors = [];
  for (let i = 0; i < n; i++) {
    if (n % i === 0) divisors.push(i);
  }
  return divisors;
}

//utility
function sumArrayNumbers(array) {
  if (array.length === 0) return null;
  return array.reduce((acc, curr) => {
    return acc + curr;
  });
}

//subSets with 2 or more elements
function subSets(array) {
  return array
    .reduce(
      (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
      [[]]
    )
    .filter((subSet) => subSet.length > 1);
}

function hotelRoom(roomsNumber = 200) {
  let roomNo = 100;
  while (roomNo <= roomsNumber) {
    const divisorArray = divisors(roomNo);
    const divisorSum = sumArrayNumbers(divisorArray);
    const subSetsSums = [];
    const sSets = subSets(divisorArray);
    sSets.forEach((ss) => {
      subSetsSums.push(sumArrayNumbers(ss));
    });
    if (roomNo < divisorSum && !subSetsSums.includes(roomNo)) return roomNo;
    roomNo += 1;
  }
}

hotelRoom();

module.exports = hotelRoom;
