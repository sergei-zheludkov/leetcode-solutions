export const sortArrayByParity = (nums: number[]): number[] => {
  const l = nums.length - 1;

  let i = 0, j = l;

  while (i < j) {
    if (nums[i] % 2 > nums[j] % 2) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    if (!(nums[i] % 2)) {
      i++;
    }

    if (nums[j] % 2) {
      j--;
    }
  }

  return nums;
};

// export const sortArrayByParity = (nums: number[]): number[] => {
//   const l = nums.length - 1;
//
//   let i = 0, j = 1;
//
//   while (i < l) {
//     if (!(nums[j] % 2)) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
//
//     if (!(nums[i] % 2) || !(nums[j] % 2) || !(j < l)) {
//       i++;
//       j = i;
//     }
//
//     j++;
//   }
//
//   return nums;
// };
