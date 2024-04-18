import { findMaxConsecutiveOnes } from './max-consecutive-ones';

test.each([
  { nums: [1,0,1,0,1,0], expected: 1 },
  { nums: [1,0,1,1,0,1], expected: 2 },
  { nums: [1,1,0,1,1,1], expected: 3 },
  { nums: [1,1,0,1,1,1,1,1,0,1,1,1], expected: 5 },
  { nums: [1,1,0,1,1,1,0,0,0,0,1,1], expected: 3 },
])('max consecutive ones', ({ nums, expected }) => {
  expect(findMaxConsecutiveOnes(nums)).toBe(expected);
});
