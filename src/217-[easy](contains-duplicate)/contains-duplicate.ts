export const containsDuplicate = (nums: number[]): boolean => {
  const collection = new Set(nums);

  return collection.size !== nums.length;
};
