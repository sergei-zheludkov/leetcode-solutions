import { sortedSquares } from './squares-of-a-sorted-array';

test.each([
  { nums: [-4,-1,0,3,10], expected: [0,1,9,16,100] },
  { nums: [-7,-3,2,3,11], expected: [4,9,9,49,121] },
])('squares of a sorted array', ({ nums, expected }) => {
  expect(sortedSquares(nums)).toEqual(expected);
});
