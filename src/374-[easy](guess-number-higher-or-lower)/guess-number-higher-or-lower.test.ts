import { getGuess, guessNumber } from './guess-number-higher-or-lower';

test.each([
  { n: 1, pick: 1, expected: 1 },
  { n: 2, pick: 1, expected: 1 },
  { n: 10, pick: 6, expected: 6 },
  { n: 100, pick: 7, expected: 7 },
])('guess number higher or lower', ({ n, pick, expected }) => {
  expect(guessNumber(n, getGuess(pick))).toBe(expected);
});
