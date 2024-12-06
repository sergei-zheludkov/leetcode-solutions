import { dominantIndex } from './largest-number-at-least-twice-of-others';

test.each([
  { nums: [3,6,1,0], expected: 1 },
  { nums: [1,2,3,4], expected: -1 },
  { nums: [3,4,1,0,2,4,8,1,4], expected: 6 },
  { nums: [3,4,1,0,2,4,8,1,4,5], expected: -1 },
])('largest number at least twice of others', ({ nums, expected }) => {
  expect(dominantIndex(nums)).toBe(expected);
});
