import { totalMoney } from './calculate-money-in-leetcode-bank';

test.each([
  { n: 4, expected: 10 },
  { n: 10, expected: 37 },
  { n: 20, expected: 96 },
])('calculate money in leetcode bank', ({ n,expected }) => {
  expect(totalMoney(n)).toBe(expected);
});
