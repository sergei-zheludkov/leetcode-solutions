import { findComplement } from './number-complement';

test.each([
  { num: 1, expected: 0 },
  { num: 5, expected: 2 },
  { num: 10, expected: 5 },
  { num: 11, expected: 4 },
  { num: 215, expected: 40 },
  { num: 1024, expected: 1023 },
  { num: 8252341, expected: 136266 },
  { num: 214239420, expected: 54196035 },
])('number complement', ({ num, expected }) => {
  expect(findComplement(num)).toBe(expected);
});
