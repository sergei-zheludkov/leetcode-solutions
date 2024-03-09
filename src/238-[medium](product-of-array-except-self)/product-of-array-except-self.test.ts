import { productExceptSelf } from './product-of-array-except-self';

test.each([
  { array: [0,0], expected: [0,0] },
  { array: [0,1], expected: [1,0] },
  { array: [1,1], expected: [1,1] },
  { array: [1,2], expected: [2,1] },
  { array: [1,2,3], expected: [6,3,2] },
  { array: [2,2,9], expected: [18,18,4] },
  { array: [2,6,8], expected: [48,16,12] },
  { array: [2,5,9], expected: [45,18,10] },
  { array: [5,7,10], expected: [70,50,35] },
  { array: [1,2,3,4], expected: [24,12,8,6] },
  { array: [10,20,30], expected: [600,300,200] },
  { array: [-1,1,0,-3,3], expected: [-0,0,9,-0,0] },
])('product of array except self', ({ array, expected })  => {
  expect(productExceptSelf(array)).toEqual(expected);
});
