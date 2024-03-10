import { intToRoman } from './integer-to-roman';

test.each([
  { num: 3, expected: 'III' },
  { num: 4, expected: 'IV' },
  { num: 9, expected: 'IX' },
  { num: 44, expected: 'XLIV' },
  { num: 58, expected: 'LVIII' },
  { num: 99, expected: 'XCIX' },
  { num: 400, expected: 'CD' },
  { num: 900, expected: 'CM' },
  { num: 1994, expected: 'MCMXCIV' },
  { num: 3999, expected: 'MMMCMXCIX' },
])('integer to roman', ({ num, expected }) => {
  expect(intToRoman(num)).toBe(expected);
});

