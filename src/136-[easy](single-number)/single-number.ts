export const singleNumber = (nums: number[]): number => {
  const collection = new Set<number>();

  for (const num of nums) {
    if (collection.has(num)){
      collection.delete(num);
    } else {
      collection.add(num);
    }
  }

  return collection.values().next().value;
};
