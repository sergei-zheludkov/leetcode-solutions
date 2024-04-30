import { findLeastNumOfUniqueInts } from './least-number-of-unique-integers-after-k-removals';

test.each([
  { nums: [5, 5, 4], k: 1, expected: 1 },
  { nums: [4, 3, 1, 1, 3, 3, 2], k: 3, expected: 2 },
  { nums: [5,5,4,5,1,2,2,3,3,4,6,1,9], k: 3, expected: 5 },
  { nums: [5,5,4,5,1,2,2,3,3,4,6,1,9], k: 4, expected: 4 },
  { nums: [5,5,4,5,1,2,2,3,3,4,6,1,9], k: 5, expected: 4 },
  { nums: [5,5,4,5,1,2,2,3,3,4,6,1,9], k: 6, expected: 3 },
])('least number of unique integers after k removals', ({ nums, k, expected }) => {
  expect(findLeastNumOfUniqueInts(nums, k)).toBe(expected);
});
