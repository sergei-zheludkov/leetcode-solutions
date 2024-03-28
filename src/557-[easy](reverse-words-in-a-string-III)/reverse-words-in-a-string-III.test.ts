import { reverseWords } from './reverse-words-in-a-string-III';

test.each([
  { str: 'Let\'s take LeetCode contest', expected: 's\'teL ekat edoCteeL tsetnoc' },
  { str: 'Mr Ding', expected: 'rM gniD' },
  { str: 'My name is Sergei', expected: 'yM eman si iegreS' },
])('reverse words in a string III', ({ str, expected }) => {
  expect(reverseWords(str)).toBe(expected);
});
