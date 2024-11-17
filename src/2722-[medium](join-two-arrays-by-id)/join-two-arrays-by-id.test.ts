import { ArrayType, join } from './join-two-arrays-by-id';

test.each<{
  array1: ArrayType[];
  array2: ArrayType[];
  expected: ArrayType[];
}>([
  {
    array1: [{ id: 1, x: 1 }, { id: 2, x: 9 }],
    array2: [{ id: 3, x: 5 }],
    expected: [{ id: 1, x: 1 }, { id: 2, x: 9 }, { id: 3, x: 5 }],
  },
  {
    array1: [{ id: 1, x: 2, y: 3 }, { id: 2, x: 3, y: 6 }],
    array2: [{ id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 }],
    expected: [{ id: 1, x: 2, y: 3 }, { id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 }],
  },
  {
    array1: [{ id: 1, b: { b: 94 },v: [4, 3], y: 48 }],
    array2: [{ id: 1, b: { c: 84 }, v: [1, 3] }],
    expected: [{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }],
  },
  {
    array1: [{ id: 1, x: 36, d: 26, f: 35 }, { id: 3, c: 20, z: 75 }],
    array2: [{ id: 2, o: 48, z: 84, y: 61 }],
    expected: [{ d: 26, f: 35, id: 1, x: 36 },{ id: 2, o: 48, y: 61, z: 84 },{ c: 20, id: 3, z: 75 }],
  },
])('join two arrays by id', ({ array1, array2, expected }) => {
  expect(join(array1, array2)).toEqual(expected);
});
