export const maxFrequencyElements = (nums: number[]): number => {
  const collection = new Map<number, number>();

  for (const num of nums) {
    const count = collection.get(num);

    collection.set(num, count ? count + 1 : 1);
  }

  const countsArray = Array.from(collection.values())
    .sort((countA, countB) => countB - countA);

  let maxCount = 0;
  let result = 0;

  for (const count of countsArray) {
    if (count > maxCount) {
      maxCount = count;
    }
    if (maxCount === count) {
      result += count;
    } else {
      break;
    }
  }

  return result;
};
