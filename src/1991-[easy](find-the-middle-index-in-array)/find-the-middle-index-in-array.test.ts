import { findMiddleIndex } from './find-the-middle-index-in-array';

test.each([
  { nums: [7], expected: 0 },
  { nums: [2,1,-1], expected: 0 },
  { nums: [1,-1,4], expected: 2 },
  { nums: [2,3,-1,8,4], expected: 3 },
  { nums: [1,7,3,6,5,6], expected: 3 },
  { nums: [6,7,8,1,2,3,4,5,6,1], expected: 3 },
  { nums: [2,5], expected: -1 },
  { nums: [1,2,3], expected: -1 },
  { nums: [6,7,8,1,2,3,4,5,6,1,4,2,3,5,5], expected: -1 },
])('find the middle index in array', ({ nums, expected }) => {
  expect(findMiddleIndex(nums)).toBe(expected);
});
