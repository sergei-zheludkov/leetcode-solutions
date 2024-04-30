export const longestOnes = (nums: number[], k: number): number => {
  let max = 0;
  let zeros = 0;
  let l = 0, r = 0;

  for (; r < nums.length; r++) {
    zeros += nums[r] ? 0 : 1;

    while (zeros > k) {
      zeros -= nums[l] ? 0 : 1;
      l++;
    }

    max = Math.max(max, r - l);
  }

  return max ? max + 1 : max;
};
