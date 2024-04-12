import { findDifference } from './find-the-difference-of-two-arrays';

test.each([
  { nums1: [1,2,3], nums2: [2,4,6], expected: [[1,3],[4,6]] },
  { nums1: [1,2,3,3], nums2: [1,1,2,2], expected: [[3],[]] },
  { nums1: [1,2,3,1,3,2,4,1,4,3,8,7,4,2,3,8,5,7,4,3,0,1,7,8,7,1,3,6], nums2: [2,4,6,4,3,6,8,5,8,6,2,8,4,6,5,8,7,6,5,9,8,3,4,1,4,6,5,3], expected: [[0],[9]] },
])('find the difference of two arrays', ({ nums1, nums2, expected }) => {
  expect(findDifference(nums1,nums2)).toEqual(expected);
});