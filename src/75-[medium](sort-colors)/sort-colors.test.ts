import { sortColors } from './sort-colors';

test.each([
  { array: [2,0,2,1,1,0], expected: [0,0,1,1,2,2] },
  { array: [2,0,1], expected: [0,1,2] },
  { array: [0], expected: [0] },
  { array: [1], expected: [1] },
])('sort colors', ({ array, expected }) => {
  sortColors(array);

  expect(array).toEqual(expected);
});