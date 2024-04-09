import { maxOperations } from './max-number-of-k-sum-pairs';

test.each([
  { nums: [1,2,3,4], k: 5, expected: 2 },
  { nums: [3,1,3,4,3], k: 6, expected: 1 },
  { nums: [5,2,3,5,1,5,6,4,2,8], k: 10, expected: 3 },
  { nums: [5,2,3,5,1,5,6,4,2,8,1], k: 6, expected: 3 },
  { nums: [3,3,3,3,3,2,2,2,2,2], k: 5, expected: 5 },
])('max number of k sum pairs', ({ nums, k, expected }) => {
  expect(maxOperations(nums, k)).toBe(expected);
});
