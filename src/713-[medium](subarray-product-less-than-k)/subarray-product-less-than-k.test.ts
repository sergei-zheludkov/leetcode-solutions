import { numSubarrayProductLessThanK } from './subarray-product-less-than-k';

test.each([
  { nums: [1,2,3], k: 0, expected: 0 },
  { nums: [1,5,2,6], k: 15, expected: 8 },
  { nums: [10,5,2,6], k: 100, expected: 8 },
  { nums: [10,5,2,6,3], k: 51, expected: 10 },
])('subarray product less than k', ({ nums, k, expected }) => {
  expect(numSubarrayProductLessThanK(nums, k)).toBe(expected);
});
