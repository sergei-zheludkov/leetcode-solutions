export const isHappy = (n: number): boolean => {
  const collection = new Set<number>();

  let sum = n.toString();

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const newSum = sum.split('')
      .reduce((acc, num) => Number(num) ** 2 + acc, 0);

    if (newSum === 1) {
      return true;
    }

    if (collection.has(newSum)) {
      return false;
    }

    collection.add(newSum);
    sum = newSum.toString();
  }
};
