// link to problem: https://leetcode.com/problems/first-unique-character-in-a-string

const test1_str = "leetcode";
const test2_str = "loveleetcode";
const test3_str = "aabb";

function firstUniqChar(str: string): number {
  for (let step = 0; step < str.length; step++) {
    const current = str[step];

    const prev = str.substring(0, step);
    const rest = str.substring(step + 1);

    if (!(prev.includes(current) || rest.includes(current))) {
      return step
    }
  }

  return -1;
}


console.log(`test 1: \n Expected: 0 \n Output: ${firstUniqChar(test1_str)}`);
console.log(`test 2: \n Expected: 2 \n Output: ${firstUniqChar(test2_str)}`);
console.log(`test 3: \n Expected: -1 \n Output: ${firstUniqChar(test3_str)}`);

export { firstUniqChar };