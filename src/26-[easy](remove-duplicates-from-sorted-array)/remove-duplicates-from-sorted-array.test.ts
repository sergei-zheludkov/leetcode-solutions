import { removeDuplicates } from './remove-duplicates-from-sorted-array';

const test1_arr = [1,1,2];
const test2_arr = [0,0,1,1,1,2,2,3,3,4];
const test3_arr = [0,0,0,0];
const test4_arr = [0];
const test5_arr: number[] = [];

test('remove duplicates from sorted array', () => {
  expect(removeDuplicates(test1_arr)).toEqual(2);
  expect(test1_arr).toEqual([1,2]);
  expect(removeDuplicates(test2_arr)).toEqual(5);
  expect(test2_arr).toEqual([0,1,2,3,4]);
  expect(removeDuplicates(test3_arr)).toEqual(1);
  expect(test3_arr).toEqual([0]);
  expect(removeDuplicates(test4_arr)).toEqual(1);
  expect(test4_arr).toEqual([0]);
  expect(removeDuplicates(test5_arr)).toEqual(0);
  expect(test5_arr).toEqual([]);
});
