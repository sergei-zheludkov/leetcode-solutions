export const missingNumber = (nums: number[]): number => {
  const { length } = nums;
  const expectedSum = length * (length + 1) / 2;
  const realSum = nums.reduce((acc, elem) => acc + elem, 0);
  return expectedSum - realSum;
};
