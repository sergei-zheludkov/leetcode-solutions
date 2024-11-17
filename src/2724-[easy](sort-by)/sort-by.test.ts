/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { JSONValue } from '../types';
import { Fn, sortBy } from './sort-by';


test.each<{
  array: JSONValue[];
  func: Fn;
  expected: JSONValue[];
}>([
  // @ts-ignore
  { array: [5, 4, 1, 2, 3], func: (x: number) => x, expected: [1, 2, 3, 4, 5] },
  // @ts-ignore
  { array: [{ x: 1 }, { x: 0 }, { x: -1 }], func: (d: { x: number }) => d.x, expected: [{ x: -1 }, { x: 0 }, { x: 1 }] },
  // @ts-ignore
  { array: [[3, 4], [5, 2], [10, 1]], func: (x: [number, number]) => x[1], expected: [[10, 1], [5, 2], [3, 4]] },
  // @ts-ignore
])('sort by', ({ array, func, expected }) => {
  expect(sortBy(array, func)).toEqual(expected);
});
