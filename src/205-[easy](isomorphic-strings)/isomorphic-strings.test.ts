import { isIsomorphic } from './isomorphic-strings';

describe('isomorphic strings', () => {
  test('truthy cases', () => {
    expect(isIsomorphic('egg', 'add')).toBeTruthy();
    expect(isIsomorphic('paper', 'title')).toBeTruthy();
    expect(isIsomorphic('paper', 'title')).toBeTruthy();
    expect(isIsomorphic('krul', 'manu')).toBeTruthy();
    expect(isIsomorphic('foo2gs', 'baates')).toBeTruthy();
  });

  test('falsy cases', () => {
    expect(isIsomorphic('foo', 'bar')).toBeFalsy();
    expect(isIsomorphic('fae2gs', 'bootes')).toBeFalsy();
  });
});
