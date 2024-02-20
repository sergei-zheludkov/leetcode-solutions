// link to problem: https://leetcode.com/problems/missing-number

const test1_arr = [3, 0, 1];
const test2_arr = [0, 1];
const test3_arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const missingNumber = (nums: number[]): number => {
  const { length } = nums;
  const expectedSum = length * (length + 1) / 2;
  const realSum = nums.reduce((acc, elem) => acc + elem, 0);
  return expectedSum - realSum;
};

console.log(`test1: \n EXPECTED: 2 \n OUTPUT:`, missingNumber(test1_arr));
console.log(`test2: \n EXPECTED: 2 \n OUTPUT:`, missingNumber(test2_arr));
console.log(`test3: \n EXPECTED: 8 \n OUTPUT:`, missingNumber(test3_arr));

export { missingNumber };
