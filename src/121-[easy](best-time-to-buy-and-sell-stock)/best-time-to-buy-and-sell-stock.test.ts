import { maxProfit } from './best-time-to-buy-and-sell-stock';

test.each([
  { array: [7,6,4,3,1], expected: 0 },
  { array: [7,1,5,3,6,4], expected: 5 },
  { array: [3,5,3,6,4,1,8], expected: 7 },
  { array: [2,8,3,6,4,2,7], expected: 6 },
])('best time to buy and sell stock', ({ array, expected }) => {
  expect(maxProfit(array)).toBe(expected);
});
