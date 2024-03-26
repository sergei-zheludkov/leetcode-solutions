export const firstMissingPositive = (nums: number[]): number => {
  const collection = new Set(nums);

  let i = 1;

  while (collection.has(i)) {
    i++;
  }

  return i;
};

// export const firstMissingPositive = (nums: number[]): number => {
//   const collection: number[] = [0];
//
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 1) {
//       continue;
//     }
//
//     collection[nums[i]] = nums[i];
//   }
//
//   const missing = collection.findIndex((n) => n === undefined);
//
//   return ~missing ? missing : collection.length;
// };
