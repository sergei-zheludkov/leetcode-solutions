import { largestDivisibleSubset } from './largest-divisible-subset';

test('largest divisible subset', () => {
  expect(largestDivisibleSubset([1,2,3]).length).toBe(2);
  expect(largestDivisibleSubset([1,2,4,8]).length).toBe(4);
  expect(largestDivisibleSubset([1,3,9,12]).length).toBe(3);
  expect(largestDivisibleSubset([1,2,3,5,7,11]).length).toBe(2);
  expect(largestDivisibleSubset([1,2,3,6,7,11]).length).toBe(3);
  expect(largestDivisibleSubset([9,75,12,18,90,4,36,8,28,2]).length).toBe(4);
  expect(largestDivisibleSubset([1,2,3,8,7,4,12,100,9,18,36]).length).toBe(5);
  expect(largestDivisibleSubset([1,2,800,3,8,7,4,12,100,200,20,10,9,18,400,5,36]).length).toBe(8);
  expect(largestDivisibleSubset([1,2,800,3,8,7,4,12,1000,50,17,9,18,400,5,36]).length).toBe(6);
});
