export const findMaxAverage = (nums: number[], k: number): number => {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum += nums[i];
    sum -= nums[i - k];

    max = Math.max(sum / k, max);
  }

  return max;
};
