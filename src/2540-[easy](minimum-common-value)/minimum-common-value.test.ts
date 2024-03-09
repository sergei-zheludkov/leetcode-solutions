import { getCommon } from './minimum-common-value';

test.each([
  { nums1: [1], nums2: [2], expected: -1 },
  { nums1: [1,2,3], nums2: [2,4], expected: 2 },
  { nums1: [1,6], nums2: [2,3,4,5,6], expected: 6 },
  { nums1: [1,2,3,6], nums2: [2,3,4,5], expected: 2 },
  { nums1: [1,6], nums2: [2,3,4,5,6,7,8], expected: 6 },
  { nums1: [1,9,10], nums2: [2,3,4,5,6,7,8], expected: -1 },
])('minimum common value', ({ nums1, nums2, expected }) => {
  expect(getCommon(nums1, nums2)).toBe(expected);
});
