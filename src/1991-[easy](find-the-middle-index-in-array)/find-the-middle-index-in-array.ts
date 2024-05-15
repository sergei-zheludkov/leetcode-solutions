export const findMiddleIndex = (nums: number[]): number => {
  const postfix: number[] = [];

  for (let i = nums.length - 1; i >= 0 ; i--) {
    postfix[i] = nums[i] + (postfix[i + 1] ?? 0);
  }

  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (prefixSum === postfix[i]) {
      return i;
    }
  }

  return -1;
};