export const findDisappearedNumbers = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length; i++) {
    nums[Math.abs(nums[i]) - 1] *= nums[Math.abs(nums[i]) - 1] > 0 ? -1 : 1;
  }

  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }

  return res;
};

// export const findDisappearedNumbers = (nums: number[]): number[] => {
//   for (let i = 0; i < nums.length; i++) {
//     while (i !== nums[i] - 1 && nums[i]) {
//       if (nums[i] === nums[nums[i] - 1]) {
//         nums[i] = NaN;
//       } else {
//         const tmp = nums[nums[i] - 1];
//         nums[nums[i] - 1] = nums[i];
//         nums[i] = tmp;
//       }
//     }
//   }
//
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (!nums[i]) {
//       nums.splice(i, 1, i+1);
//     } else {
//       nums.splice(i, 1);
//     }
//   }
//
//   return nums;
// };
