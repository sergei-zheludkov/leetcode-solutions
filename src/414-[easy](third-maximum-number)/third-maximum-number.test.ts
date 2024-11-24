import { thirdMax } from './third-maximum-number';

test.each([
  { num: [3,2,1], expected: 1 },
  { num: [1,2], expected: 2 },
  { num: [2,2,3,1], expected: 1 },
  { num: [1,1,1,1,1], expected: 1 },
  { num: [1,2,3,4,5,5,4,6,1], expected: 4 },
  { num: [1,2,-2147483648], expected: -2147483648 },
])('third maximum number', ({ num, expected }) => {
  expect(thirdMax(num)).toEqual(expected);
});
