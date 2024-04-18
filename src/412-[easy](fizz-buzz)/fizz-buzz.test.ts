import { fizzBuzz } from './fizz-buzz';

test.each([
  { num: 1, expected: ['1'] },
  { num: 3, expected: ['1','2','Fizz'] },
  { num: 5, expected: ['1','2','Fizz','4','Buzz'] },
  { num: 15, expected: ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz'] },
])('fizz buzz', ({ num, expected }) => {
  expect(fizzBuzz(num)).toEqual(expected);
});
