// link to problem: https://leetcode.com/problems/number-of-1-bits

// const test1_n = 00000000000000000000000000001011;
// const test2_n = 00000000000000000000000010000000;
// const test3_n = 11111111111111111111111111111101;

const hammingWeight = (n: number): number => {
  let count = 0;

  while (n !== 0) {
    count++;
    n &= (n - 1);
  }

  return count;
}

// PREVIOUS SOLUTION

// const hammingWeight = (n: number): number => {
//   let count = 0;
//   let index = 31;
//
//   while (index) {
//     if (n >> index & 1) {
//       count += 1
//     }
//     index--
//   }
//
//   return count;
// }

// console.log(hammingWeight(test1_n))
// console.log(hammingWeight(test2_n))
// console.log(hammingWeight(test3_n))

export { hammingWeight };