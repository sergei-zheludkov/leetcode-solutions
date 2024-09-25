import { largestNumber } from './largest-number';

test.each([
  { nums: [0,0], expected: '0' },
  { nums: [10,2], expected: '210' },
  { nums: [3,30,34,5,9], expected: '9534330' },
  { nums: [10,2,99,43,5,14,1,2,314,2521,4251,2,3], expected: '9954342513314252122214110' },
])('largest number', ({ nums, expected }) => {

  expect(largestNumber(nums)).toEqual(expected);
});
