const romans: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const letters = [...s];
  if (letters.length === 1) return romans[letters[0]];
  let sum = romans[letters.pop()!];
  let prev = sum;
  for (let i = letters.length - 1; i >= 0; --i) {
    if (romans[letters[i]] < prev) {
      sum -= romans[letters[i]];
    } else {
      sum += romans[letters[i]];
    }
    prev = romans[letters.pop()!] || 0;
  }
  return sum;
}

console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // "1994"

export {};
