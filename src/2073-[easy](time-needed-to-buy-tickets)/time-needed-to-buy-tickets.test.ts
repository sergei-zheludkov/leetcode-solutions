import { timeRequiredToBuy } from './time-needed-to-buy-tickets';

test.each([
  { tickets: [2,3,2], k: 2, expected: 6 },
  { tickets: [5,1,1,1], k: 0, expected: 8 },
  { tickets: [2,8,3,2], k: 2, expected: 10 },
  { tickets: [9,8,4,6,9,4], k: 2, expected: 21 },
  { tickets: [9,8,4,6,9,4], k: 3, expected: 31 },
  { tickets: [9,8,4,6,9,4], k: 4, expected: 40 },
])('time needed to buy tickets', ({ tickets, k, expected }) => {
  expect(timeRequiredToBuy(tickets, k)).toBe(expected);
});
