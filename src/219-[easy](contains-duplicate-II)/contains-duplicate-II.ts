export const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const collection = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const prevNumIndex = collection.get(num);
    const isPrevIndexExist = prevNumIndex !== undefined;

    if (isPrevIndexExist && (Math.abs(prevNumIndex - index) <= k)) {
      return true;
    } else {
      collection.set(num, index);
    }
  }

  return false;
};
