import { findMaxAverage } from './maximum-average-subarray-I';

test.each([
  { nums: [5], k: 1, expected: 5 },
  { nums: [1,12,-5,-6,50,3], k: 4, expected: 12.75 },
  { nums: [11,-4,20,-5,6,-8,22,-10,20], k: 4, expected: 6 },
  { nums: [11,-4,20,-5,6,-8,22,-10,20], k: 3, expected: 10.666666666666666 },
])('maximum average subarray I', ({ nums, k, expected }) => {
  expect(findMaxAverage(nums, k)).toBe(expected);
});
