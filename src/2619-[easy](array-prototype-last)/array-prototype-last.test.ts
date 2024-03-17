/* eslint-disable @typescript-eslint/ban-ts-comment */
import { last } from './array-prototype-last';

// @ts-ignore
Array.prototype.last = last;

test.each([
  { array: [], expected: -1 },
  { array: [null], expected: null },
  { array: [1,2,3,4,5], expected: 5 },
  { array: [null, {}, 3], expected: 3 },
  { array: ['1','2','3','4'], expected: '4' },
])('array prototype last', ({ array, expected }) => {
  // @ts-ignore
  expect(array.last()).toBe(expected);
});

