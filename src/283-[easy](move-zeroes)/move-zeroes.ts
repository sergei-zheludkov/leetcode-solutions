export const moveZeroes = (nums: number[]): void => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};