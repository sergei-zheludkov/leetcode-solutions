import { sortArrayByParityII } from './sort-array-by-parity-II';

test.each([
  { nums: [2,3], expected: [2,3] },
  { nums: [4,2,5,7], expected: [4,5,2,7] },
  { nums: [2,4,1,6,3,5,8,9], expected: [2,1,4,3,6,5,8,9] },
  { nums: [2,3,1,1,4,0,0,4,3,3], expected: [2,3,0,1,4,1,0,3,4,3] },
])('sort array by parity II', ({ nums, expected }) => {
  expect(sortArrayByParityII(nums)).toEqual(expected);
});
