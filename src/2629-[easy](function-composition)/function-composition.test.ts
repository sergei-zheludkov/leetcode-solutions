import { compose } from './function-composition';

type F = (x: number) => number;

test.each<{
  array: F[];
  n: number;
  expected: number;
}>([
  { array: [x => x + 1, x => x * x, x => 2 * x], n: 4, expected: 65 },
  { array: [x => 10 * x, x => 10 * x, x => 10 * x], n: 1, expected: 1000 },
  { array: [], n: 42, expected: 42 },
])('function composition', ({ array, n, expected }) => {
  expect(compose(array)(n)).toBe(expected);
});
