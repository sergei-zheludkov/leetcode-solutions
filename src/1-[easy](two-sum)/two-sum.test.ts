import { twoSum } from './two-sum';

test('two sum', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
  expect(twoSum([3,2,4], 6)).toEqual([1,2]);
  expect(twoSum([3,3], 6)).toEqual([0,1]);
  expect(twoSum([3,3,4,2,9,7], 16)).toEqual([4,5]);
  expect(twoSum([1,2,3,4,5], 9)).toEqual([3,4]);
  expect(twoSum([10,20,30,40,50], 90)).toEqual([3,4]);
  expect(twoSum([5,5,10,15,20,25], 30)).toEqual([2,4]);
});
