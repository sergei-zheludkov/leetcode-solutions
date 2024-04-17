import { sum } from './add-two-integers';

test.each([
  { num1: 12, num2: 5, expected: 17 },
  { num1: -10, num2: 4, expected: -6 },
])('add two integers', ({ num1, num2, expected }) => {
  expect(sum(num1, num2)).toBe(expected);
});
