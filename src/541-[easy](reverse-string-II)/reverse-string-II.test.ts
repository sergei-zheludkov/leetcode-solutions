import { reverseStr } from './reverse-string-II';

test.each([
  { str: 'abcd', k: 2, expected: 'bacd' },
  { str: 'abcdefg', k: 2, expected: 'bacdfeg' },
  { str: 'abcdefg', k: 3, expected: 'cbadefg' },
  { str: 'abcdefghijklmnopqestuvwxyz', k: 1, expected: 'abcdefghijklmnopqestuvwxyz' },
  { str: 'abcdefghijklmnopqestuvwxyz', k: 2, expected: 'bacdfeghjiklnmopeqstvuwxzy' },
  { str: 'abcdefghijklmnopqestuvwxyz', k: 3, expected: 'cbadefihgjklonmpqeutsvwxzy' },
  { str: 'abcdefghijklmnopqestuvwxyz', k: 4, expected: 'dcbaefghlkjimnoptsequvwxzy' },
  { str: 'abcdefghijklmnopqestuvwxyz', k: 5, expected: 'edcbafghijonmlkpqestyxwvuz' },
  { str: 'abcdefghijklmnopqestuvwxyz', k: 6, expected: 'fedcbaghijkleqponmstuvwxzy' },
  { str: 'abcdefghijklmnopqestuvwxyz', k: 26, expected: 'zyxwvutseqponmlkjihgfedcba' },
])('reverse string II', ({ str, k, expected }) => {
  expect(reverseStr(str, k)).toBe(expected);
});
