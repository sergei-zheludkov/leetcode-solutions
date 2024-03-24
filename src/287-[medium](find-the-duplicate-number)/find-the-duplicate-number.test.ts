import { findDuplicate } from './find-the-duplicate-number';

test.each([
  { nums: [1,1], expected: 1 },
  { nums: [1,3,4,2,2], expected: 2 },
  { nums: [3,1,3,4,2], expected: 3 },
  { nums: [3,3,3,3,3], expected: 3 },
])('find the duplicate number', ({ nums, expected }) => {
  expect(findDuplicate(nums)).toBe(expected);
});
