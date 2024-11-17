export const findNumbers = (nums: number[]): number => nums.reduce((acc, num) => !(String(num).length % 2) ? acc + 1 : acc, 0);
