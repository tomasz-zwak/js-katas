function fnrc(input) {
  if (!input || input.length <= 0) return null;
  input = String(input);
  const stringArray = input.split("");
  let acc = "";
  for (let index = 0; index < stringArray.length; index++) {
    if (acc === stringArray[index]) return acc;
    acc = stringArray[index];
  }
}

console.log(fnrc(123333214454));

module.exports = fnrc;
