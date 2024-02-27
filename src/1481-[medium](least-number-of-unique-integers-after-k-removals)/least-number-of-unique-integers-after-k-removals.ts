export const findLeastNumOfUniqueInts = (arr: number[], k: number): number => {
  const collection = new Map<number, number>();

  for (const num of arr) {
    collection.set(num, (collection.get(num) || 0) + 1);
  }

  const countedResult = Array.from(collection.values()).sort((countA, countB) => countB - countA);

  while (k) {
    const count = countedResult[countedResult.length - 1];

    if (k >= count) {
      k -= count;
      countedResult.pop();
    } else {
      return countedResult.length;
    }
  }

  return countedResult .length;
};
