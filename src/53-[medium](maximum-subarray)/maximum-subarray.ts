export const maxSubArray = (nums: number[]): number => {
  let max = nums[0];
  let curSum = 0;

  for (const num of nums) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += num;
    max = Math.max(max, curSum);
  }

  return max;
};

// PREV SOLUTION

// export const maxSubArray = (nums: number[]): number => {
//   let max = 0;
//
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j <= nums.length; j++) {
//       max = Math.max(max, eval(nums.slice(i, j).join('+')));
//     }
//   }
//
//   return max;
// };
