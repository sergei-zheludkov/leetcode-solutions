import { findLeastNumOfUniqueInts } from './least-number-of-unique-integers-after-k-removals';

test('least number of unique integers after k removals', () => {
  expect(findLeastNumOfUniqueInts([5, 5, 4], 1)).toBe(1);
  expect(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3)).toBe(2);
  expect(findLeastNumOfUniqueInts([5,5,4,5,1,2,2,3,3,4,6,1,9], 3)).toBe(5);
  expect(findLeastNumOfUniqueInts([5,5,4,5,1,2,2,3,3,4,6,1,9], 4)).toBe(4);
  expect(findLeastNumOfUniqueInts([5,5,4,5,1,2,2,3,3,4,6,1,9], 5)).toBe(4);
  expect(findLeastNumOfUniqueInts([5,5,4,5,1,2,2,3,3,4,6,1,9], 6)).toBe(3);
});
