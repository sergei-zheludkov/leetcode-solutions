export const hammingDistance = (x: number, y: number): number => {
  let offset = 32;
  let count = 0;

  while (offset > 0) {
    if (((x >>> offset) & 1) !== ((y >>> offset) & 1)) {
      count++;
    }

    offset--;
  }

  return count;
};
