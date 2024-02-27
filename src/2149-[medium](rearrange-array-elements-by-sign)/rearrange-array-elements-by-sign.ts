export const rearrangeArray = (nums: number[]): number[] => {
  const lessThanZero: number[] = [];
  const moreThanZero: number[] = [];

  nums.forEach((num) => {
    if (num < 0) {
      lessThanZero.push(num);
    } else {
      moreThanZero.push(num);
    }
  });

  nums.length = 0;

  moreThanZero.forEach((num, index) => {
    nums.push(num, lessThanZero[index]);
  });

  return nums;
};

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
