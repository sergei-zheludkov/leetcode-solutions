export const singleNumber = (nums: number[]): number[] => {
  const collection = new Set<number>();

  for (const n of nums) {
    if (collection.has(n)) {
      collection.delete(n);
    } else {
      collection.add(n);
    }
  }

  return Array.from(collection.values());
};