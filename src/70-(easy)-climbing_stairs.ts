// link to problem: https://leetcode.com/problems/climbing-stairs

const test1_num = 2;
const test2_num = 3;
const test3_num = 4;
const test4_num = 5;
const test5_num = 6;
const test6_num = 7;
const test7_num = 8;
const test8_num = 9;

function climbStairs(n: number): number {
  let prev = 0
  let current = 1;

  for (let step = 0; step < n; step++) {
    const newCurrent = current + prev;

    prev = current;
    current = newCurrent;
  }

  return current
}

console.log('test1: \n EXPECTED: 2 \n OUTPUT:', climbStairs(test1_num));
console.log('test2: \n EXPECTED: 3 \n OUTPUT:', climbStairs(test2_num));
console.log('test3: \n EXPECTED: 5 \n OUTPUT:', climbStairs(test3_num));
console.log('test4: \n EXPECTED: 8 \n OUTPUT:', climbStairs(test4_num));
console.log('test5: \n EXPECTED: 13 \n OUTPUT:', climbStairs(test5_num));
console.log('test6: \n EXPECTED: 21 \n OUTPUT:', climbStairs(test6_num));
console.log('test7: \n EXPECTED: 34 \n OUTPUT:', climbStairs(test7_num));
console.log('test8: \n EXPECTED: 55 \n OUTPUT:', climbStairs(test8_num));

export { climbStairs };