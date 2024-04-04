import { rotate } from './rotate-array';

test.each([
  { nums: [-1,-100,3,99], k: 2, expected: [3,99,-1,-100] },
  { nums: [1,2,3,4,5,6,7], k: 3, expected: [5,6,7,1,2,3,4] },
  { nums: [1,2,3,4,5,6,7,8,9,10], k: 5, expected: [6,7,8,9,10,1,2,3,4,5] },
  { nums: [1,2,3,4,5,6,7,8,9,10], k: 15, expected: [6,7,8,9,10,1,2,3,4,5] },
])('rotate array', ({ nums, k, expected }) => {
  rotate(nums, k);

  expect(nums).toEqual(expected);
});
