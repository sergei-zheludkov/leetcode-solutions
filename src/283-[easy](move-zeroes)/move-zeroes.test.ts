import { moveZeroes } from './move-zeroes';

test.each([
  { nums: [0], expected: [0] },
  { nums: [0,1,2,3,4], expected: [1,2,3,4,0] },
  { nums: [0,1,0,3,12], expected: [1,3,12,0,0] },
])('move zeroes', ({ nums, expected }) => {
  moveZeroes(nums);

  expect(nums).toEqual(expected);
});
