import { rearrangeArray } from './rearrange-array-elements-by-sign';

test('rearrange array elements by sign', () => {
  expect(rearrangeArray([-1,1])).toEqual([1,-1]);
  expect(rearrangeArray([3,1,-2,-5,2,-4])).toEqual([3,-2,1,-5,2,-4]);
  expect(rearrangeArray([3,1,-2,-5,2,-4,11,9,-9,-1])).toEqual([3,-2,1,-5,2,-4,11,-9,9,-1]);
});
