// link to problem: https://leetcode.com/problems/roman-to-integer

const roma_str_1 = "III";
const roma_str_2 = "LVIII";
const roma_str_3 = "MCMXCIV";
const roma_str_4 = "MMMCMXCIX";

const symbols: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function romanToInt(roma_str: string): number {
  let result = 0;

  for (let step = 0; step < roma_str.length; step++) {
    const cur = roma_str[step];
    const next = roma_str[step + 1];

    const isComplicated = (cur === "C" && (next === "D" || next === "M"))
      || (cur === "X" && (next === "L" || next === "C"))
      || (cur === "I" && (next === "V" || next === "X"));

    if (isComplicated) {
      result += (symbols[next] - symbols[cur])
      step++

      continue
    }

    if (cur in symbols) {
      result += symbols[cur]
    }
  }

  return result
}

console.log('test_1: => 3', romanToInt(roma_str_1));
console.log('test_2: => 58', romanToInt(roma_str_2));
console.log('test_3: => 1994', romanToInt(roma_str_3));
console.log('test_3: => 3999', romanToInt(roma_str_4));

export { romanToInt };
