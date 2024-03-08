import { maxFrequencyElements } from './count-elements-with-maximum-frequency';

test.each([
  { nums: [1], expected: 1 },
  { nums: [1,2,3], expected: 3 },
  { nums: [1,2,3,4,5], expected: 5 },
  { nums: [1,2,2,3,1,4], expected: 4 },
  { nums: [1,1,2,2,3,3], expected: 6 },
  { nums: [1,1,2,3,4,4,5,5], expected: 6 },
])('count elements with maximum frequency', ({ nums, expected }) => {
  expect(maxFrequencyElements(nums)).toBe(expected);
});
