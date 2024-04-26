export const commonFactors = (a: number, b: number): number => {
  let divisor = a < b ? a : b;
  let count = 0;

  while (divisor) {
    if (a % divisor === 0 && b % divisor === 0) {
      count++;
    }

    divisor--;
  }

  return count;
};