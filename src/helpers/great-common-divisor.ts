export const gcd = (x: number, y: number): number => !y ? x : gcd(y, x % y);
