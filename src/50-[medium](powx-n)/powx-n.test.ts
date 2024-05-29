import { myPow } from './powx-n';

test.each([
  { x: 2, n: 10, expected: 1024.00000 },
  { x: 2.1, n: 3, expected: 9.261000000000001 },
  { x: 2, n: -2, expected: 0.25000 },
  { x: 2, n: -10, expected: 0.0009765625 },
  { x: 3, n: -2, expected: 0.1111111111111111 },
  { x: 0.00001, n: 2147483647, expected: 0 },
])('pow x n', ({ x, n, expected }) => {
  expect(myPow(x, n)).toBe(expected);
});
