import { filter } from './filter-elements-from-array';

test.each([
  {
    array: [0,10,20,30],
    callback: (n: number) => n > 10,
    expected: [20, 30],
  },
  {
    array: [1,2,3],
    callback: (_n: number, i: number) => i === 0,
    expected: [1],
  },
  {
    array: [-2,-1,0,1,2],
    callback: (n: number) =>  n + 1,
    expected: [-2, 0, 1, 2],
  },
])('filter elements from array', ({ array, callback, expected }) => {
  expect(filter(array, callback)).toEqual(expected);
});
