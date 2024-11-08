import { compressedString } from './string-compression-III';


test.each([
  { str: 'a', expected: '1a' },
  { str: 'abcde', expected: '1a1b1c1d1e' },
  { str: 'aaaaaaaaaaaaaabb', expected: '9a5a2b' },
  { str: 'zzzzzazzzzbdnnnndddddmmmmmmmmmmmmmmaamm', expected: '5z1a4z1b1d4n5d9m5m2a2m' },
  { str: 'zzzzzazzzzbdnnnndddddmmmmammmmmfmmmemmaamm', expected: '5z1a4z1b1d4n5d4m1a5m1f3m1e2m2a2m' },
])('string compression III', ({ str, expected }) => {
  expect(compressedString(str)).toBe(expected);
});
