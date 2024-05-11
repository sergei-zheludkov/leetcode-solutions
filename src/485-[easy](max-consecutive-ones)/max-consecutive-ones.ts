export const findMaxConsecutiveOnes = (nums: number[]): number => {
  let max = 0;

  for (let i = 0, curr = 0; i < nums.length; i++) {
    if (nums[i]) {
      curr += 1;
      max = Math.max(max, curr);
    } else {
      curr = 0;
    }
  }

  return max;
};
