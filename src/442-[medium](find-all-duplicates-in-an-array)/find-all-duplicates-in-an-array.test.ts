import { findDuplicates } from './find-all-duplicates-in-an-array';

test.each([
  { nums: [4,3,2,7,8,2,3,1], expected: [2,3] },
  { nums: [1,1,2], expected: [1] },
  { nums: [1], expected: [] },
])('find all duplicates in an array', ({ nums, expected }) => {
  expect(findDuplicates(nums)).toEqual(expected);
});
