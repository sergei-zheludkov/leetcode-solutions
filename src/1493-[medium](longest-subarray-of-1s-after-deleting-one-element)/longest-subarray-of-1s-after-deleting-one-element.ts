export const longestSubarray = (nums: number[]): number => {
  let max = 0;
  let zeros = 0;
  let l = 0, r = 0;

  for (; r < nums.length; r++) {
    zeros += nums[r] ? 0 : 1;

    while (zeros > 1) {
      zeros -= nums[l] ? 0 : 1;
      l++;
    }

    max = Math.max(max, r - l);
  }

  return max;
};
