import { minRemoveToMakeValid } from './minimum-remove-to-make-valid-parentheses';

test.each([
  { str: '))((', expected: '' },
  { str: 'a)b(c)d', expected: 'ab(c)d' },
  { str: 'lee(t(c)o)de)', expected: 'lee(t(c)o)de' },
  { str: 'test(string)with()parentheses', expected: 'test(string)with()parentheses' },
  { str: 'test)((string)with()parentheses(', expected: 'test(string)with()parentheses' },
])('minimum remove to make valid parentheses', ({ str, expected }) => {
  expect(minRemoveToMakeValid(str)).toBe(expected);
});
