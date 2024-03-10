import { romanToInt } from './roman-to-integer';

test.each([
  { str: 'III', expected: 3 },
  { str: 'IV', expected: 4 },
  { str: 'IX', expected: 9 },
  { str: 'XLIV', expected: 44 },
  { str: 'LVIII', expected: 58 },
  { str: 'XCIX', expected: 99 },
  { str: 'CD', expected: 400 },
  { str: 'CM', expected: 900 },
  { str: 'MCMXCIV', expected: 1994 },
  { str: 'MMMCMXCIX', expected: 3999 },
])('roman to integer', ({ str, expected }) => {
  expect(romanToInt(str)).toBe(expected);
});

