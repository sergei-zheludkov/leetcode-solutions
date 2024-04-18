const gcd = (x: number, y: number): number => !y ? x : gcd(y, x % y);

export const gcdOfStrings = (str1: string, str2: string): string => str1 + str2 === str2 + str1
  ? str1.slice(0, gcd(str1.length, str2.length))
  : '';