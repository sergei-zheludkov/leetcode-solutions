import { romanToInt } from './roman-to-integer';

test('roman to integer', () => {
  expect(romanToInt('III')).toBe(3);
  expect(romanToInt('IV')).toBe(4);
  expect(romanToInt('IX')).toBe(9);
  expect(romanToInt('XLIV')).toBe(44);
  expect(romanToInt('LVIII')).toBe(58);
  expect(romanToInt('XCIX')).toBe(99);
  expect(romanToInt('CD')).toBe(400);
  expect(romanToInt('CM')).toBe(900);
  expect(romanToInt('MCMXCIV')).toBe(1994);
  expect(romanToInt('MMMCMXCIX')).toBe(3999);
});

