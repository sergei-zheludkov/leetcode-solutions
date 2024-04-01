import { singleNumber } from './single-number-III';

test.each([
  { nums: [0,1], expected: [0,1] },
  { nums: [-1,0], expected: [-1,0] },
  { nums: [1,2,1,3,2,5], expected: [3,5] },
  { nums: [1,2,3,4,5,6], expected: [1,2,3,4,5,6] },
  { nums: [1,2,3,4,5,6,1,2,3], expected: [4,5,6] },
])('single number III', ({ nums, expected }) => {
  expect(singleNumber(nums)).toEqual(expected);
});
