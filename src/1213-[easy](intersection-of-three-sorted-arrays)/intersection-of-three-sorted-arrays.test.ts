import { arraysIntersection } from './intersection-of-three-sorted-arrays';

test.each([
  { array1: [1,2,3,4,5], array2: [1,2,5,7,9], array3: [1,3,4,5,8], expected: [1,5] },
  { array1: [197,418,523,876,1356], array2: [501,880,1593,1710,1870], array3: [521,682,1337,1395,1764], expected: [] },
  { array1: [1,10,50,100,500,1000,5000,10000,50000,100000], array2: [1,2,3,4,5,6,7,8,9,10], array3: [1,2,5,10,20,50,100,500,1000,5000], expected: [1,10] },
])('intersection of three sorted arrays', ({ array1, array2, array3, expected }) => {
  expect(arraysIntersection(array1, array2, array3)).toEqual(expected);
});
