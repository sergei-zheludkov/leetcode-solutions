import { isValid } from './valid-parentheses';

describe('valid parentheses', () => {
  test('true cases', () => {
    expect(isValid('()')).toBeTruthy();
    expect(isValid('()[]{}')).toBeTruthy();
    expect(isValid('{[]}')).toBeTruthy();
    expect(isValid('[()]{}')).toBeTruthy();
  });
  test('false cases', () => {
    expect(isValid('{')).toBeFalsy();
    expect(isValid('}')).toBeFalsy();
    expect(isValid('(]')).toBeFalsy();
    expect(isValid('([)]')).toBeFalsy();
    expect(isValid('[]{')).toBeFalsy();
  });
});
