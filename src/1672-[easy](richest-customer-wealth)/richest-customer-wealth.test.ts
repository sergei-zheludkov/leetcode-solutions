import { maximumWealth } from './richest-customer-wealth';

test.each([
  { accounts: [[1,2,3],[3,2,1]], expected: 6 },
  { accounts: [[1,5],[7,3],[3,5]], expected: 10 },
  { accounts: [[2,8,7],[7,1,3],[1,9,5]], expected: 17 },
])('richest customer wealth', ({ accounts, expected }) => {
  expect(maximumWealth(accounts)).toBe(expected);
});