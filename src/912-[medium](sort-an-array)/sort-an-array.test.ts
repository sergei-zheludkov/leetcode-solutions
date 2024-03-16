import { sortArray } from './sort-an-array';

test.each([
  { array: [5,2,3,1], expected: [1,2,3,5] },
  { array: [5,1,1,2,0,0], expected: [0,0,1,1,2,5] },
  { array: [2,0,2,1,1,0], expected: [0,0,1,1,2,2] },
  { array: [81,89,9,11,14,76,54,22], expected: [9,11,14,22,54,76,81,89] },
])('sort an array', ({ array, expected }) => {
  expect(sortArray(array)).toEqual(expected);
});
