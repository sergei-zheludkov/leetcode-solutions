export const myPow = (x: number, n: number): number => {
  if (n > 16000) {
    return x ** n;
  }

  if (!(n - 1) || !x) {
    return x;
  }

  if (n < 0) {
    return myPow(1 / x, Math.abs(n));
  }

  return x * myPow(x, n - 1);
};

// export const myPow = (x: number, n: number): number => x ** n;
