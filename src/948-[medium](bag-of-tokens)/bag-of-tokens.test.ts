import { bagOfTokensScore } from './bag-of-tokens';

test.each([
  { tokens: [100], power: 50, expected: 0 },
  { tokens: [58,91], power: 50, expected: 0 },
  { tokens: [100, 200], power: 150, expected: 1 },
  { tokens: [100, 200, 300, 400], power: 200, expected: 2 },
  { tokens: [1000, 300, 500, 400], power: 300, expected: 2 },
  { tokens: [1000, 300, 500, 600], power: 300, expected: 1 },
])('bag of tokens', ({ tokens, power, expected }) => {
  expect(bagOfTokensScore(tokens, power)).toBe(expected);
});