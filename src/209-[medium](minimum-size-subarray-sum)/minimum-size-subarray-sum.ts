export const minSubArrayLen = (target: number, nums: number[]): number => {
  let min = +Infinity;
  let sum = 0;
  let i = 0, j = 0;

  while (i < nums.length && j < nums.length) {
    sum += nums[j] ?? 0;

    while (sum >= target && i <= j) {
      min = Math.min(min, j - i + 1);
      sum -= nums[i];
      i++;
    }
    j++;

  }

  return isFinite(min) ? min : 0;
};
