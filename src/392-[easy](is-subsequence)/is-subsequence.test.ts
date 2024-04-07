import { isSubsequence } from './is-subsequence';

describe('is subsequence', () => {
  test.each([
    { s: 'abc', t: 'ahbgdc' },
    { s: 'ece', t: 'leetcode' },
    { s: 'usqene', t: 'subsequence' },
  ])('truthy cases', ({ s, t }) => {
    expect(isSubsequence(s, t)).toBeTruthy();
  });

  test.each([
    { s: 'axc', t: 'ahbgdc' },
    { s: 'tec', t: 'leetcode' },
    { s: 'sebnce', t: 'subsequence' },
  ])('falsy cases', ({ s, t }) => {
    expect(isSubsequence(s, t)).toBeFalsy();
  });
});
