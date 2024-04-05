import { makeGood } from './make-the-string-great';

test.each([
  { str: '', expected: '' },
  { str: 's', expected: 's' },
  { str: 'Pp', expected: '' },
  { str: 'abBAcC', expected: '' },
  { str: 'leEeetcode', expected: 'leetcode' },
  { str: 'leeEetcCcoddDe', expected: 'leetcode' },
  { str: 'kkdsFuqUfSDKK', expected: 'kkdsFuqUfSDKK' },
])('make the string great', ({ str, expected }) => {
  expect(makeGood(str)).toBe(expected);
});
