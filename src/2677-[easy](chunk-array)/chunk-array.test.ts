import { chunk } from './chunk-array';

test.each([
  { array: [], size: 1, expected: [] },
  { array: [8,5,3,2,6], size: 6, expected: [[8,5,3,2,6]] },
  { array: [1,9,6,3,2], size: 3, expected: [[1,9,6],[3,2]] },
  { array: [1,2,3,4,5], size: 1, expected: [[1],[2],[3],[4],[5]] },
  { array: [10, 20, 30, 40], size: 2, expected: [[10, 20], [30, 40]] },
])('chunk array', ({ array, size, expected }) => {
  expect(chunk(array, size)).toEqual(expected);
});
