import { findDisappearedNumbers } from './find-all-numbers-disappeared-in-an-array';

test.each([
  { nums: [1,1], expected: [2] },
  { nums: [4,3,2,7,8,2,3,1], expected: [5,6] },
])('find all numbers disappeared in an array', ({ nums, expected }) => {
  expect(findDisappearedNumbers(nums)).toEqual(expected);
});
