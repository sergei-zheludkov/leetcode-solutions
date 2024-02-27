import { intToRoman } from './integer-to-roman';

test('integer to roman', () => {
  expect(intToRoman(3)).toBe('III');
  expect(intToRoman(4)).toBe('IV');
  expect(intToRoman(9)).toBe('IX');
  expect(intToRoman(44)).toBe('XLIV');
  expect(intToRoman(58)).toBe('LVIII');
  expect(intToRoman(99)).toBe('XCIX');
  expect(intToRoman(400)).toBe('CD');
  expect(intToRoman(900)).toBe('CM');
  expect(intToRoman(1994)).toBe('MCMXCIV');
  expect(intToRoman(3999)).toBe('MMMCMXCIX');
});

