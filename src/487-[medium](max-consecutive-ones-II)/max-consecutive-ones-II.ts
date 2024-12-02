export const findMaxConsecutiveOnes = (nums: number[]): number => {
  let i = 0, j = 0;

  let zeros = 0;
  let max = 0;

  while (j < nums.length) {
    if (!nums[j]) zeros++;

    while (zeros > 1 && i < j) {
      if (!nums[i]) zeros--;
      i++;
    }

    j++;
    max = Math.max(j - i, max);
  }

  return max;
};

// export const findMaxConsecutiveOnes = (nums: number[]): number => {
//   let i = 0, j = 0;
//
//   let curr = 0;
//   let zeros = 0;
//   let max = 0;
//
//   while (j < nums.length) {
//     if (!nums[j]) zeros++;
//
//     while (zeros > 1 && i < j) {
//       if (!nums[i]) zeros--;
//
//       i++;
//       curr--;
//     }
//
//     j++;
//     curr++;
//     max = Math.max(curr, max);
//   }
//
//   return max;
// };
