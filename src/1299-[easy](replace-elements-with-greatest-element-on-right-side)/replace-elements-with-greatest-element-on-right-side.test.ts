import { replaceElements } from './replace-elements-with-greatest-element-on-right-side';

test.each([
  { array: [400], expected: [-1] },
  { array: [17,18,5,4,6,1], expected: [18,6,6,6,1,-1] },
  { array: [1,2,3,4,5,6,7,8,9,10], expected: [10,10,10,10,10,10,10,10,10,-1] },
  { array: [300,25,1,5,22,190,20,8,10,13,100], expected: [190,190,190,190,190,100,100,100,100,100,-1] },
])('replace elements with greatest element on right side', ({ array, expected }) => {
  replaceElements(array);

  expect(array).toEqual(expected);
});
