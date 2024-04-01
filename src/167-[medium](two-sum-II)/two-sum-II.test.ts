import { twoSum } from './two-sum-II';

test.each([
  // { nums: [2,3,4], target: 6, expected: [1,3] },
  // { nums: [-1,0], target: -1, expected: [1,2] },
  // { nums: [2,7,11,15], target: 9, expected: [1,2] },
  { nums: [0,0,2,2,11,15], target: 4, expected: [3,4] },
])('two sum II', ({ nums, target, expected }) => {
  expect(twoSum(nums, target)).toEqual(expected);
});
