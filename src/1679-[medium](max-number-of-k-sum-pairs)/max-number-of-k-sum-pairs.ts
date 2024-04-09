export const maxOperations = (nums: number[], k: number): number => {
  const collection = new Map<number, number>();

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const amount = collection.get(k - nums[i]);

    if (amount) {
      collection.set(k - nums[i], amount - 1);
      count += 1;
      continue;
    }

    const stack = collection.get(nums[i]);

    if (stack) {
      collection.set(nums[i], stack + 1);
      continue;
    }

    collection.set(nums[i], 1);
  }

  return count;
};

// export const maxOperations = (nums: number[], k: number): number => {
//   const collection: Record<number, number> = {};
//
//   let count = 0;
//
//   for (let i = 0; i < nums.length; i++) {
//     if (collection[k - nums[i]]) {
//       collection[k - nums[i]] -= 1;
//       count += 1;
//       continue;
//     }
//
//     if (collection[nums[i]]) {
//       collection[nums[i]] += 1;
//     } else {
//       collection[nums[i]] = 1;
//     }
//   }
//
//   return count;
// };