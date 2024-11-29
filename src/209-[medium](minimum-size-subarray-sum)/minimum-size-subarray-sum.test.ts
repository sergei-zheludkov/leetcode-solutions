import { minSubArrayLen } from './minimum-size-subarray-sum';

test.each([
  { nums: [1,4,4], target: 4, expected: 1 },
  { nums: [2,3,1,2,4,3], target: 7, expected: 2 },
  { nums: [1,1,1,1,1,1,1,1], target: 11, expected: 0 },
  { nums: [2,3,1,2,4,3,4,1,3,2,8,5], target: 15, expected: 3 },
  { nums: [1,2,3,4,5], target: 11, expected: 3 },
])('minimum size subarray sum', ({ target, nums, expected }) => {
  expect(minSubArrayLen(target, nums)).toBe(expected);
});



