import { findMaxK } from './largest-positive-integer-that-exists-with-its-negative';

test.each([
  { nums: [-1,2,-3,3], expected: 3 },
  { nums: [-1,10,6,7,-7,1], expected: 7 },
  { nums: [-10,8,6,7,-2,-3], expected: -1 },
])('largest positive integer that exists with its negative', ({ nums, expected }) => {
  expect(findMaxK(nums)).toBe(expected);
});
