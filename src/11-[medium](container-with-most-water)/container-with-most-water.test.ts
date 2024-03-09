import { maxArea } from './container-with-most-water';

test.each([
  { array: [1,1], expected: 1 },
  { array: [1,8,6,2,5,4,8,3,7], expected: 49 },
  { array: [5,3,1,1,2,4], expected: 20 },
  { array: [5,3,6,6,4,3], expected: 16 },
  { array: [5,3,6,3,4,6], expected: 25 },
  { array: [1,3,2,5,25,24,5], expected: 24 },
])('container with most water', ({ array, expected }) => {
  expect(maxArea(array)).toBe(expected);
});
