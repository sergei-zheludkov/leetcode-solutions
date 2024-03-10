export const intersection = (nums1: number[], nums2: number[]): number[] => {
  const collection1 = Array.from(new Set(nums1).values());
  const collection2 = new Set(nums2);

  const result: number[] = [];

  for (const num of collection1) {
    if (collection2.has(num)) {
      result.push(num);
    }
  }

  return result;
};

