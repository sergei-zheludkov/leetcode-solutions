import { findMaxConsecutiveOnes } from './max-consecutive-ones-II';

test.each([
  { nums: [0], expected: 1 },
  { nums: [1], expected: 1 },
  { nums: [0,0], expected: 1 },
  { nums: [1,1], expected: 2 },
  { nums: [0,0,1,1], expected: 3 },
  { nums: [1,0,1,1,0], expected: 4 },
  { nums: [1,0,1,1,0,1], expected: 4 },
  { nums: [0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0], expected: 5 },
])('max consecutive ones II', ({ nums, expected }) => {
  expect(findMaxConsecutiveOnes(nums)).toBe(expected);
});
