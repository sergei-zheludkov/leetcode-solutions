export const getCommon = (nums1: number[], nums2: number[]): number => {
  if (nums2.length > nums1.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  for (let i = 0; i < nums1.length; i++) {
    let start = 0;
    let end = nums2.length - 1;

    while (start <= end) {
      const middle = Math.floor((start + end) / 2);

      if (nums2[middle] === nums1[i]) {
        return nums1[i];
      }

      if (nums1[i] < nums2[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
  }

  return -1;
};
