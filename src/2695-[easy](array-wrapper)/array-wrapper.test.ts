/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ArrayWrapper } from './array-wrapper';

describe('array wrapper', () => {
  test.each([
    { array1: [0,0], array2: [0,0], expected: 0 },
    { array1: [5], array2: [9], expected: 14 },
    { array1: [1,2], array2: [3,4], expected: 10 },
    { array1: [69,69], array2: [69,69], expected: 276 },
    { array1: [100,200], array2: [300,400], expected: 1000 },
    { array1: [23,98,42,70], array2: [23,98,42,70], expected: 466 },
  ])('add', ({ array1, array2, expected }) => {
    const obj1 = new ArrayWrapper(array1);
    const obj2 = new ArrayWrapper(array2);

    // @ts-ignore
    expect(obj1 + obj2).toBe(expected);
  });

  test.each([
    { array: [], expected: '[]' },
    { array: [1,2,3,4], expected: '[1,2,3,4]' },
    { array: [23,98,42,70], expected: '[23,98,42,70]' },
  ])('to string', ({ array, expected }) => {
    const obj = new ArrayWrapper(array);

    expect(String(obj)).toBe(expected);
  });
});
