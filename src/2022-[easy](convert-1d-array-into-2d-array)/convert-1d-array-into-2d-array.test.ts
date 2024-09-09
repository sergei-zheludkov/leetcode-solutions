import { construct2DArray } from './convert-1d-array-into-2d-array';

test.each([
  { arr: [1,2,3,4,5,6], m: 3, n: 2, expected: [[1,2],[3,4],[5,6]] },
  { arr: [1,2,3,4], m: 2, n: 2, expected: [[1,2],[3,4]] },
  { arr: [1,2,3], m: 1, n: 3, expected: [[1,2,3]] },
  { arr: [1,2,3,4,5], m: 3, n: 2, expected: [] },
  { arr: [1,2,3,4,5], m: 2, n: 3, expected: [] },
  { arr: [1,2,3,4,5], m: 2, n: 2, expected: [] },
  { arr: [1,2], m: 1, n: 1, expected: [] },
  { arr: [2], m: 1, n: 1, expected: [[2]] },
])('convert 1d array into 2d array', ({ arr, m, n, expected }) => {
  expect(construct2DArray(arr, m, n)).toStrictEqual(expected);
});
