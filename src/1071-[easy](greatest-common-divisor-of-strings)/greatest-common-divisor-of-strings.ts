const gcd = (x: number, y: number): number => {
  if (!y) {
    return x;
  }

  return gcd(y, x % y);
};

export const gcdOfStrings = (str1: string, str2: string): string => {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  const m = str1.length, n = str2.length;
  const divider = gcd(m, n);

  return str1.slice(0, divider);
};
