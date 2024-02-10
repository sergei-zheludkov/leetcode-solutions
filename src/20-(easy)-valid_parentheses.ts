// link to problem: https://leetcode.com/problems/valid-parentheses

const test1_str = "()";
const test2_str = "()[]{}";
const test3_str = "(]";
const test4_str = "([)]";
const test5_str = "{[]}";
const test6_str = "[()]{}";
const test7_str = "[]{"

const patterns: Record<string, string> = {
  ")": "(",
  "}": "{",
  "]": "[",
};

function isValid(str: string): boolean {
  const steak: string[] = [];

  for (const bracket of str) {
    const pattern = patterns[bracket];
    const lastItem = steak[steak.length - 1];

    if (pattern && pattern === lastItem) {
      steak.pop();
    } else {
      steak.push(bracket)
    }
  }

  return !steak.length
}

console.log(`test 1: \n Expected: true \n Output: ${isValid(test1_str)}`);
console.log(`test 2: \n Expected: true \n Output: ${isValid(test2_str)}`);
console.log(`test 3: \n Expected: false \n Output: ${isValid(test3_str)}`);
console.log(`test 4: \n Expected: false \n Output: ${isValid(test4_str)}`);
console.log(`test 5: \n Expected: true \n Output: ${isValid(test5_str)}`);
console.log(`test 6: \n Expected: true \n Output: ${isValid(test6_str)}`);
console.log(`test 7: \n Expected: false \n Output: ${isValid(test7_str)}`);

export { isValid }