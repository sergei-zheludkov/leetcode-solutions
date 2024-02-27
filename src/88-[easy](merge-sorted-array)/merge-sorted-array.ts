export const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  if (!n) {
    nums1.splice(m);
  }

  const addArray = nums2.slice(0, n);

  nums1.splice(m, nums1.length - m, ...addArray);
  nums1.sort((a, b) => a - b);
};
