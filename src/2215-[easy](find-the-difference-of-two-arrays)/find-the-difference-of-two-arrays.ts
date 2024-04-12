export const findDifference = (nums1: number[], nums2: number[]): number[][] => {
  const collection1 = new Set(nums1);
  const collection2 = new Set(nums2);

  const keys1 = collection1.keys();
  const keys2 = collection2.keys();

  let size = Math.max(collection1.size, collection2.size);

  while (size) {
    const key2 = keys2.next().value;

    if (collection1.has(key2)) {
      collection1.delete(key2);
      collection2.delete(key2);
    }

    const key1 = keys1.next().value;

    if (collection2.has(key1)) {
      collection1.delete(key1);
      collection2.delete(key1);
    }

    size--;
  }

  return [Array.from(collection1.keys()), Array.from(collection2.keys())];
};