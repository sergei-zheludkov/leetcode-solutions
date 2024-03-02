export const sortedSquares = (nums: number[]): number[] => {
  const collection: number[] = [];

  for (let i = 0, j = nums.length - 1; i <= j; ) {
    const left = Math.abs(nums[i]);
    const right = Math.abs(nums[j]);

    if (right > left) {
      collection.push(right ** 2);
      j--;
    }

    if (left >= right) {
      collection.push(left ** 2);
      i++;
    }
  }

  return collection.reverse();
};
