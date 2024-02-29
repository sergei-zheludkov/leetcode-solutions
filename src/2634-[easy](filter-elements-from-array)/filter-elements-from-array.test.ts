import { filter } from './filter-elements-from-array';

test.each([
  {
    array: [0,10,20,30],
    callback: (n: number) => n > 10,
    result: [20, 30],
  },
  {
    array: [1,2,3],
    callback: (_n: number, i: number) => i === 0,
    result: [1],
  },
  {
    array: [-2,-1,0,1,2],
    callback: (n: number) =>  n + 1,
    result: [-2, 0, 1, 2],
  },
])('filter elements from array', ({ array, callback, result }) => {
  expect(filter(array, callback)).toEqual(result);
});
