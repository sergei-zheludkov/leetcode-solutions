import { maximumOddBinaryNumber } from './maximum-odd-binary-number';

test.each([
  { str: '1', expected: '1' },
  { str: '0010', expected: '0001' },
  { str: '0101', expected: '1001' },
  { str: '00111010', expected: '11100001' },
  { str: '10111010', expected: '11110001' },
  { str: '00001111', expected: '11100001' },
  { str: '10101010', expected: '11100001' },
  { str: '0000000001011101', expected: '1111000000000001' },
])('maximum odd binary number', ({ str, expected }) => {
  expect(maximumOddBinaryNumber(str)).toBe(expected);
});
