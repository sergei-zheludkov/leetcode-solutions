import { isValid } from './valid-parentheses';

describe('valid parentheses', () => {
  test.each(['()', '()[]{}', '{[]}', '[()]{}'])('true cases', (str) => {
    expect(isValid(str)).toBeTruthy();
  });
  test.each(['{', '}', '(]', '([)]', '[]{'])('false cases', (str) => {
    expect(isValid(str)).toBeFalsy();
  });
});
