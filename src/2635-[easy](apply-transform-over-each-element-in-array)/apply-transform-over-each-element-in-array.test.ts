import { map } from './apply-transform-over-each-element-in-array';

test.each([
  {
    array: [1, 2, 3],
    callback: (n: number) => n + 1,
    result: [2, 3, 4],
  },
  {
    array: [1, 2, 3],
    callback: (n: number, i: number) => n + i,
    result: [1, 3, 5],
  },
  {
    array: [10, 20, 30],
    callback: () =>  42,
    result: [42, 42, 42],
  },
])('apply transform over each element in array', ({ array, callback, result }) => {
  expect(map(array, callback)).toEqual(result);
});
