import { numberOfSteps } from './number-of-steps-to-reduce-a-number-to-zero';

test.each([
  { num: 14, expected: 6 },
  { num: 8, expected: 4 },
  { num: 123, expected: 12 },
])('number of steps to reduce a number to zero', ({ num, expected }) => {
  expect(numberOfSteps(num)).toBe(expected);
});
