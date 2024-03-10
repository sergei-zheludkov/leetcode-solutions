import { findMedianSortedArrays } from './median-of-two-sorted-arrays';

test.each([
  { array1: [1, 3], array2: [2], expected: 2 },
  { array1: [1, 2], array2: [3, 4], expected: 2.5 },
  { array1: [0, 0], array2: [0, 0], expected: 0 },
  { array1: [], array2: [1], expected: 1 },
  { array1: [2], array2: [], expected: 2 },
  { array1: [1,3,6,8,10], array2: [2,4,9,11], expected: 6 },
  { array1: [1,3,6,8,10], array2: [2,4,9,11,12], expected: 7 },
  { array1: [1,2,3,4,5,6,7,8], array2: [1,2,3,4], expected: 3.5 },
])('median of two sorted arrays', ({ array1, array2, expected }) => {
  expect(findMedianSortedArrays(array1, array2)).toBe(expected);
});