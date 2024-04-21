import { majorityElement } from './majority-element-II';

test.each([
  { nums: [1], expected: [1] },
  { nums: [1,2], expected: [1,2] },
  { nums: [3,2,3], expected: [3] },
  { nums: [3,2,3,2,1,4,5,6], expected: [] },
  { nums: [3,2,3,2,1,4,1,5,6,1], expected: [] },
])('majority element II', ({ nums, expected }) => {
  expect(majorityElement(nums)).toEqual(expected);
});
