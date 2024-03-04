import { addDigits } from './add-digits';

test.each([
  { num: 0, expected: 0 },
  { num: 10, expected: 1 },
  { num: 13, expected: 4 },
  { num: 38, expected: 2 },
  { num: 3287, expected: 2 },
  { num: 1214213328, expected: 9 },
])('add digits', ({ num, expected }) => {
  expect(addDigits(num)).toBe(expected);
});
