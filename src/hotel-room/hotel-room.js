function divisors(n) {
  const divisors = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) divisors.push(i);
  }
  return divisors;
}

function sumArrayNumbers(array) {
  if (array.length === 0) return null;
  return array.reduce((acc, curr) => {
    return acc + curr;
  });
}

function subSets(array) {
  return array.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );
}

function hotelRoom(roomsNumber = 100) {
  let roomNo = 5;
  while (roomNo <= roomsNumber) {
    const divisorArray = divisors(roomNo);
    const divisorSum = sumArrayNumbers(divisorArray);
    if(divisorSum <= roomNo) console.log("sum of divisors is lower than room no");
    const subSetsSums = [];
    const sSets = subSets(divisorArray).filter((s) => s.length > 1);
    sSets.forEach((ss) => {
      subSetsSums.push(sumArrayNumbers(ss));
    });
    roomNo += 1;
  }
}

hotelRoom();
module.exports = hotelRoom;
