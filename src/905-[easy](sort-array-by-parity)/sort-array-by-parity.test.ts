import { sortArrayByParity } from './sort-array-by-parity';

test.each([
  { nums: [3,1,2,4], expected: [4,2,1,3] },
  { nums: [0], expected: [0] },
])('sort array by parity', ({ nums, expected }) => {
  expect(sortArrayByParity(nums)).toEqual(expected);
});
