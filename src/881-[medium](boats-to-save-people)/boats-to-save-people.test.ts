import { numRescueBoats } from './boats-to-save-people';

test.each([
  { people: [1,2], limit: 3, expected: 1 },
  { people: [3,2,2,1], limit: 3, expected: 3 },
  { people: [3,5,3,4], limit: 5, expected: 4 },
  { people: [1,2,2,3,4,1,4,2,3,4,4,1,2,4,3,2,1,5,1,2,3,5,2,4,5,2,3], limit: 5, expected: 16 },
  { people: [9,3,2,1,1,4,4,5,6,7,9,9,6,5,4,3,3,1,4,2,3,5,3,5,4,6,7,3,5,7,4,5], limit: 9, expected: 18 },
])('boats to save people', ({ people, limit, expected }) => {
  expect(numRescueBoats(people, limit)).toBe(expected);
});