import { equalPairs } from './equal-row-and-column-pairs';

test.each([
  {
    grid: [
      [1],
    ],
    expected: 1,
  },
  {
    grid: [
      [11,1],
      [1,11],
    ],
    expected: 2,
  },
  {
    grid: [
      [3,2,1],
      [1,7,6],
      [2,7,7],
    ],
    expected: 1,
  },
  {
    grid: [
      [3,1,2,2],
      [1,4,4,5],
      [2,4,2,2],
      [2,4,2,2],
    ],
    expected: 3,
  },
  {
    grid: [
      [1,1,1,1],
      [1,1,1,1],
      [1,1,1,1],
      [1,1,1,1],
    ],
    expected: 16,
  },
])('equal row and column pairs', ({ grid, expected }) => {
  expect(equalPairs(grid)).toBe(expected);
});
