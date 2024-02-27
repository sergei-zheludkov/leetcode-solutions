export const isPowerOfTwo = (n: number): boolean => {
  if (n < 1) {
    return false;
  }

  return !(n & (n - 1));
};
