import { numTrees } from './unique-binary-search-trees';

test.each([
  { n: 1, expected: 1 },
  { n: 2, expected: 2 },
  { n: 3, expected: 5 },
  { n: 4, expected: 14 },
  { n: 5, expected: 42 },
  { n: 6, expected: 132 },
  { n: 7, expected: 429 },
  { n: 8, expected: 1430 },
  { n: 9, expected: 4862 },
  { n: 10, expected: 16796 },
])('unique binary search trees', ({ n, expected }) => {
  expect(numTrees(n)).toBe(expected);
});

