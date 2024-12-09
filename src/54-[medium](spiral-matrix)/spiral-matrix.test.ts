import { spiralOrder } from './spiral-matrix';

test.each([
  {
    matrix: [
      [1],
    ],
    expected: [1],
  },
  {
    matrix: [
      [1],
      [2],
      [3],
    ],
    expected: [1,2,3],
  },
  {
    matrix: [
      [1,2,3,4,5],
    ],
    expected: [1,2,3,4,5],
  },
  {
    matrix: [
      [1,2,3],
      [4,5,6],
      [7,8,9],
    ],
    expected: [1,2,3,6,9,8,7,4,5],
  },
  {
    matrix: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9,10,11,12],
    ],
    expected: [1,2,3,4,8,12,11,10,9,5,6,7],
  },
  {
    matrix: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11,12,13,14,15],
      [16,17,18,19,20],
      [21,22,23,24,25],
    ],
    expected: [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13],
  },
])('spiral matrix', ({ matrix, expected }) => {
  expect(spiralOrder(matrix)).toEqual(expected);
});
