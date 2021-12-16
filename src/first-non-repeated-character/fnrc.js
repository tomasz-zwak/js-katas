function fnrc(input) {
  if (!input || input.length <= 0) return null;
  input = input.toString();
  for (let i = 0; i < input.length; i++) {
    let prev = input.charAt(i - 1);
    let current = input.charAt(i);
    let next = input.charAt(i + 1);
    if (prev.length === 0 && current !== next) return current; // edge case
    if (current !== prev && current !== next) return current;
    if (current !== prev && next.length === 0) return current; // edge case
  }
}

module.exports = fnrc;
