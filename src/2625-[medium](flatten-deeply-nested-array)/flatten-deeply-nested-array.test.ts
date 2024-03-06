import { flat } from './flatten-deeply-nested-array';

test.each([
  {
    array: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
    n: 0,
    expected: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
  },
  {
    array: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
    n: 1,
    expected: [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15],
  },
  {
    array: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
    n: 2,
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
])('flatten deeply nested array', ({ array, n, expected }) => {
  expect(flat(array, n)).toEqual(expected);
});
