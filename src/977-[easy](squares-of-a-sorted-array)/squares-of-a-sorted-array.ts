export const sortedSquares = (nums: number[]): number[] => {
  const collection: number[] = [];

  for (let i = 0, j = nums.length - 1; i <= j; ) {
    const first = nums[i] ** 2;
    const last = nums[j] ** 2;

    collection.push(first);

    if (i === j) {
      i++;
      continue;
    }

    collection.push(last);

    i++;
    j--;
  }

  return collection.sort((a,b) => a - b);
};
