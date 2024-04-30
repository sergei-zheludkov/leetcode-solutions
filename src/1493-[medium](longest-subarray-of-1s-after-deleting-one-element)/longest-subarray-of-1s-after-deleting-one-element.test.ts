import { longestSubarray } from './longest-subarray-of-1s-after-deleting-one-element';

test.each([
  { nums: [1,1,1], expected: 2 },
  { nums: [1,1,0,1], expected: 3 },
  { nums: [0,1,1,1,0,1,1,0,1], expected: 5 },
])('longest subarray of 1s after deleting one element', ({ nums, expected }) => {
  expect(longestSubarray(nums)).toBe(expected);
});