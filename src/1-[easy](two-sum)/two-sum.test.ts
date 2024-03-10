import { twoSum } from './two-sum';

test.each([
  { array: [2,7,11,15], target: 9, expected: [0,1] },
  { array: [3,2,4], target: 6, expected: [1,2] },
  { array: [3,3], target: 6, expected: [0,1] },
  { array: [3,3,4,2,9,7], target: 16, expected: [4,5] },
  { array: [1,2,3,4,5], target: 9, expected: [3,4] },
  { array: [10,20,30,40,50], target: 90, expected: [3,4] },
  { array: [5,5,10,15,20,25], target: 30, expected: [2,4] },
])('two sum', ({ array, target, expected }) => {
  expect(twoSum(array, target)).toEqual(expected);
});
