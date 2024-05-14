import { longestOnes } from './max-consecutive-ones-III';

test.each([
  { nums: [0,0,0,0], k: 0, expected: 0 },
  { nums: [1,1,1,0,0,0,1,1,1,1,0], k: 2, expected: 6 },
  { nums: [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k: 3, expected: 10 },
])('max consecutive ones III', ({ nums, k, expected }) => {
  expect(longestOnes(nums, k)).toBe(expected);
});