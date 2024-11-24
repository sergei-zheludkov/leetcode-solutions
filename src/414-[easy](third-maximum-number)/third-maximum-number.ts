export const thirdMax = (nums: number[]): number => {
  const res = [-Infinity, -Infinity, -Infinity];

  for (let i = 0; i < nums.length; i++) {
    if (res.includes(nums[i])) {
      continue;
    }

    if (nums[i] > res[0]) {
      res[2] = res[1];
      res[1] = res[0];
      res[0] = nums[i];
    } else if (nums[i] > res[1]) {
      res[2] = res[1];
      res[1] = nums[i];
    } else if (nums[i] > res[2]) {
      res[2] = nums[i];
    }
  }

  return isFinite(res[2]) ? res[2] : res[0];
};
