import { maxSubArray } from './maximum-subarray';

test.each([
  { array: [1], expected: 1 },
  { array: [5,4,-1,7,8], expected: 23 },
  { array: [-2,1,-3,-1,2,1,-5,4], expected: 4 },
  { array: [-1,1,-3,5,2,1,-5,-4], expected: 8 },
  { array: [-2,1,-3,4,-1,2,1,-5,4], expected: 6 },
])('maximum subarray', ({ array, expected }) => {
  expect(maxSubArray(array)).toBe(expected);
});
