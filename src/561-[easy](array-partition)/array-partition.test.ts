import { arrayPairSum } from './array-partition';

test.each([
  { nums: [1,4,3,2], expected: 4 },
  { nums: [6,2,6,5,1,2], expected: 9 },
  { nums: [6,2,6,5,1,2,4,5,9,2,5,8], expected: 26 },
])('array partition', ({ nums, expected }) => {
  expect(arrayPairSum(nums)).toBe(expected);
});
