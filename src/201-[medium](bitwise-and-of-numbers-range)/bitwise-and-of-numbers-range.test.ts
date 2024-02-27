import { rangeBitwiseAnd } from './bitwise-and-of-numbers-range';

test('bitwise and of numbers range', () => {
  expect(rangeBitwiseAnd(9, 15)).toBe(8);
  expect(rangeBitwiseAnd(1028, 2047)).toBe(1024);
  expect(rangeBitwiseAnd(1, 2147483647)).toBe(0);
});
