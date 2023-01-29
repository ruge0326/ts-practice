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
  const numbers = [...s].map((value) => romans[value]).reverse();
  if (numbers.length === 1) return numbers[0];
  let sum = numbers.shift()!;
  let prev = sum;
  numbers.forEach((elem) => {
    elem < prev ? (sum -= elem) : (sum += elem);
    prev = elem;
  });
  return sum;
}

console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // "1994"
