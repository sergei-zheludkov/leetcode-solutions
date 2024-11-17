import { duplicateZeros } from './duplicate-zeros';

test.each([
  { array: [1,1,4,2,1,3], expected: [1,1,4,2,1,3] },
  { array: [5,1,2,3,4], expected: [5,1,2,3,4] },
  { array: [1,0,2,3,0,4,5,0], expected: [1,0,0,2,3,0,0,4] },
  { array: [1,0,0,3,0,4,5,0,6], expected: [1,0,0,0,0,3,0,0,4] },
  { array: [0,1,7,6,0,2,0,7], expected: [0,0,1,7,6,0,0,2] },
])('duplicate zeros', ({ array, expected }) => {

  duplicateZeros(array);

  expect(array).toEqual(expected);
});
