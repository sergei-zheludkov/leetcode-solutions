import { heightChecker } from './height-checker';

test.each([
  { heights: [1,1,4,2,1,3], expected: 3 }, // => [1,1,1,2,3,4]
  { heights: [5,1,2,3,4], expected: 5 }, // => [1,2,3,4,5]
  { heights: [1,2,3,4,5], expected: 0 }, // => [1,2,3,4,5]
])('height checker', ({ heights, expected }) => {
  expect(heightChecker(heights)).toBe(expected);
});