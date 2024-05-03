import { removeStars } from './removing-stars-from-a-string';

test.each([
  { str: 'leet**cod*e', expected: 'lecoe' },
  { str: 'erase*****', expected: '' },
])('removing stars from a string', ({ str, expected }) => {
  expect(removeStars(str)).toBe(expected);
});