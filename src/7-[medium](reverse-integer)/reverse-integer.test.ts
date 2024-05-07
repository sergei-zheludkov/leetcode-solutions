import { reverse } from './reverse-integer';

test.each([
  { num: 123, expected: 321 },
  { num: -123, expected: -321 },
  { num: 120, expected: 21 },
  { num: 1534236469, expected: 0 },
])('reverse integer', ({ num, expected }) => {
  expect(reverse(num)).toBe(expected);
});
