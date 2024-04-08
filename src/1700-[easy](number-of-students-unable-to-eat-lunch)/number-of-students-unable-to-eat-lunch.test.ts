import { countStudents } from './number-of-students-unable-to-eat-lunch';

test.each([
  { students: [1], sandwiches: [0], expected: 1 },
  { students: [1,1,0,0], sandwiches: [0,1,0,1], expected: 0 },
  { students: [1,1,1,0,0,1], sandwiches: [1,0,0,0,1,1], expected: 3 },
  { students: [1,1,1,0,0,1,0,1], sandwiches: [1,0,0,0,1,1,1,1], expected: 0 },
])('number of students unable to eat lunch', ({ students, sandwiches, expected }) => {
  expect(countStudents(students, sandwiches)).toBe(expected);
});
