// link to problem: https://leetcode.com/problems/rearrange-array-elements-by-sign

const test1_arr = [3,1,-2,-5,2,-4];
const test2_arr = [-1,1];
const test3_arr = [3,1,-2,-5,2,-4,11,9,-9,-1];

function rearrangeArray(nums: number[]): number[] {
  const lessThanZero: number[] = [];
  const moreThanZero: number[] = [];

  nums.forEach((num) => {
    if (num < 0) {
      lessThanZero.push(num);
    } else {
      moreThanZero.push(num);
    }
  })

  nums.length = 0;

  moreThanZero.forEach((num, index) => {
    nums.push(num, lessThanZero[index]);
  });

  return nums;
}

// SOLUTION WITH "Time Limit Exceeded" :-(
//
// function rearrangeArray(nums: number[]): number[] {
//   const lessThanZero: number[] = [];
//
//   for (let index = nums.length - 1; index >= 0; index--) {
//     const num = nums[index];
//
//     if (num < 0) {
//       lessThanZero.push(num);
//       nums.splice(index, 1);
//     }
//   }
//
//   lessThanZero.reverse();
//
//   for (let index = nums.length - 1; index >= 0; index--) {
//     nums.splice(index + 1, 0, lessThanZero[index]);
//   }
//
//   return nums;
// }

console.log(`test 1: \n ARRAY: ${test1_arr} \n EXPECTED: 3,-2,1,-5,2,-4 \n OUTPUT: ${rearrangeArray(test1_arr)}`);
console.log(`test 2: \n ARRAY: ${test2_arr} \n EXPECTED: 1,-1 \n OUTPUT: ${rearrangeArray(test2_arr)}`);
console.log(`test 3: \n ARRAY: ${test3_arr} \n EXPECTED: 3,-2,1,-5,2,-4,11,-9,9,-1 \n OUTPUT: ${rearrangeArray(test3_arr)}`);

export { rearrangeArray };