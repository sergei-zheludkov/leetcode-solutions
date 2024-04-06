import { gcdOfStrings } from './greatest-common-divisor-of-strings';

test.each([
  { str1: 'ABCABC', str2: 'ABC', expected: 'ABC' },
  { str1: 'ABABAB', str2: 'ABAB', expected: 'AB' },
  { str1: 'LEET', str2: 'CODE', expected: '' },
  { str1: 'MAYABC', str2: 'ABC', expected: '' },
  { str1: 'ABC', str2: 'MAYABC', expected: '' },
  { str1: 'KEYABC', str2: 'MAYABC', expected: '' },
  { str1: 'LEETLEET', str2: 'LEETLEET', expected: 'LEETLEET' },
  { str1: 'LEETLEET', str2: 'LEETLEETLEET', expected: 'LEET' },
  { str1: 'ABCMAY', str2: 'ABC', expected: '' },
  { str1: 'LEETLEETR', str2: 'LEETLEETK', expected: '' },
  { str1: 'LEETLEET', str2: 'LEETLEETLEETR', expected: '' },
  { str1: 'LEETLEETR', str2: 'LEETLEETLEET', expected: '' },
  { str1: 'ABABABABABABABAB', str2: 'ABAB', expected: 'ABAB' },
])('greatest common divisor of strings', ({ str1, str2, expected }) => {
  expect(gcdOfStrings(str1, str2)).toBe(expected);
});
