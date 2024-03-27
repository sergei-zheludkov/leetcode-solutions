import { hammingDistance } from './hamming-distance';

test.each([
  { x: 0, y: 1, expected: 1 },
  { x: 3, y: 1, expected: 1 },
  { x: 1, y: 4, expected: 2 },
  { x: 1, y: 400, expected: 4 },
  { x: 1024, y: 1000, expected: 7 },
  { x: 100, y: 9423958, expected: 12 },
])('hamming distance', ({ x, y, expected }) => {
  expect(hammingDistance(x, y)).toBe(expected);
});
