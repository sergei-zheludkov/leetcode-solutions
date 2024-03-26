import { firstMissingPositive } from './first-missing-positive';

test.each([
  { nums: [0,0,0], expected: 1 },
  { nums: [1,2,0], expected: 3 },
  { nums: [1,2,3], expected: 4 },
  { nums: [3,4,-1,1], expected: 2 },
  { nums: [3,1,2,0,-1], expected: 4 },
  { nums: [7,8,9,11,12], expected: 1 },
])('first missing positive', ({ nums, expected }) => {
  expect(firstMissingPositive(nums)).toBe(expected);
});