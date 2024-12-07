export const sortArrayByParityII = (nums: number[]): number[] => {
  let i = 0, j = 1;

  while (i < nums.length) {
    if (nums[i] % 2) {
      while (nums[j] % 2) j+=2;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    i+=2;
  }

  return nums;
};

// export const sortArrayByParityII = (nums: number[]): number[] => {
//   const l = nums.length - 1;
//
//   let i = 0, j = l;
//
//   while (i < j) {
//     while (i % 2 === nums[i] % 2 && i < j) {
//       i++;
//     }
//
//     while (i < j) {
//       if (!(i % 2) && j % 2 && !(nums[j] % 2)) {
//         break;
//       }
//
//       if (i % 2 && !(j % 2) && nums[j] % 2) {
//         break;
//       }
//
//       j--;
//     }
//
//     [nums[i], nums[j]] = [nums[j], nums[i]];
//
//     i++;
//     j = l;
//   }
//
//   return nums;
// };
