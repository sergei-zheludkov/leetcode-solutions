export const findDuplicates = (nums: number[]): number[] => {
  const result: number[] = [];

  for (let n of nums) {
    n = Math.abs(n);

    if (nums[n - 1] < 0) {
      result.push(n);
    }

    nums[n - 1] = -nums[n - 1];
  }

  return result;
};

// export const findDuplicates = (nums: number[]): number[] => {
//   const collection = new Set();
//   const result: number[] = [];
//
//   for (const num of nums) {
//     if (collection.has(num)) {
//       result.push(num);
//     } else {
//       collection.add(num);
//     }
//   }
//
//   return result;
// };