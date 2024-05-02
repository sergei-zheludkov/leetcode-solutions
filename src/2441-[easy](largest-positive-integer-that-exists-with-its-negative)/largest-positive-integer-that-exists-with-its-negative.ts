export const findMaxK = (nums: number[]): number => {
  const collection = new Set(nums);

  let max = -1;

  for (const n of nums) {
    if (n > 0) {
      max = Math.max(max, collection.has(-n) ? n : -1);
    }
  }

  return max;
};
