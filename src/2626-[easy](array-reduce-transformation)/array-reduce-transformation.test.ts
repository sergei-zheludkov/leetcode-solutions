import { reduce } from './array-reduce-transformation';

test.each<{
  array: number[];
  init: number;
  callback: (accum: number, curr: number) => number;
  expected: number;
    }>([
      {
        array: [1,2,3,4],
        init: 0,
        callback: (accum, curr) => accum + curr,
        expected: 10,
      },
      {
        array: [1,2,3,4],
        init: 100,
        callback: (accum, curr) => accum + curr * curr,
        expected: 130,
      },
      {
        array: [],
        init: 25,
        callback: () =>  0,
        expected: 25,
      },
    ])('array reduce transformation', ({ array, callback, init, expected }) => {
      expect(reduce(array, callback, init)).toEqual(expected);
    });
