export const searchInsert = (nums: number[], target: number): number => {
  for (let step = 0; step < (nums.length / 2); step++) {
    const firstIndex = step;
    const first = nums[firstIndex];
    const second = nums[firstIndex + 1];
    const lastIndex = nums.length - 1 - step;
    const last = nums[lastIndex];
    const secondLast = nums[lastIndex - 1];

    if (first === target) {
      return firstIndex;
    }

    if (last === target) {
      return lastIndex;
    }

    if (first < target && target < second) {
      return firstIndex + 1;
    }

    if (secondLast < target && target < last) {
      return lastIndex;
    }

    if (target < first) {
      return 0;
    }

    if (target > last) {
      return nums.length;
    }
  }

  return NaN;
};
