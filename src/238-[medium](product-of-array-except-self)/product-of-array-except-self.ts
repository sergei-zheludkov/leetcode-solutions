export const productExceptSelf = (nums: number[]): number[] => {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const [item] = nums.splice(i, 1);

    result.push(eval(nums.join('*')));

    nums.splice(i, 0, item);
  }

  return result;
};
