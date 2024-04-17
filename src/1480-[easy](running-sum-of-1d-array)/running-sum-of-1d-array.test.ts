import { runningSum } from './running-sum-of-1d-array';

test.each([
  { nums: [1,2,3,4], expected: [1,3,6,10] },
  { nums: [1,1,1,1,1], expected: [1,2,3,4,5] },
  { nums: [3,1,2,10,1], expected: [3,4,6,16,17] },
])('running sum of 1d array', ({ nums, expected }) => {
  expect(runningSum(nums)).toEqual(expected);
});
