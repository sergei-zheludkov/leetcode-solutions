import { tribonacci } from './n-th-tribonacci-number';

test.each([
  { num: 0, expected: 0 },
  { num: 1, expected: 1 },
  { num: 2, expected: 1 },
  { num: 3, expected: 2 },
  { num: 4, expected: 4 },
  { num: 5, expected: 7 },
  { num: 6, expected: 13 },
  { num: 7, expected: 24 },
  { num: 8, expected: 44 },
  { num: 10, expected: 149 },
  { num: 15, expected: 3136 },
  { num: 20, expected: 66012 },
  { num: 25, expected: 1389537 },
  { num: 30, expected: 29249425 },
  { num: 33, expected: 181997601 },
  { num: 35, expected: 615693474 },
  { num: 37, expected: 2082876103 },
])('n th tribonacci number', ({ num, expected }) => {
  expect(tribonacci(num)).toBe(expected);
});
