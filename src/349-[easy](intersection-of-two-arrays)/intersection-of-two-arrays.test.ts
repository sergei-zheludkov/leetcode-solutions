import { intersection } from './intersection-of-two-arrays';

test.each([
  { nums1: [1,2,2,1], nums2: [2,2], expected: [2] },
  { nums1: [0,0,0,0], nums2: [0,0,0], expected: [0] },
  { nums1: [4,9,5], nums2: [9,4,9,8,4], expected: [4,9] },
  { nums1: [9,5,9,5,5,9], nums2: [1,2,2,3,3,5], expected: [5] },
])('intersection of two arrays', ({ nums1, nums2, expected }) => {
  expect(intersection(nums1, nums2)).toEqual(expected);
});
