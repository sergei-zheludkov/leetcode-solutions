export const climbStairs = (n: number): number => {
  let prev = 0;
  let current = 1;

  for (let step = 0; step < n; step++) {
    const newCurrent = current + prev;

    prev = current;
    current = newCurrent;
  }

  return current;
};
