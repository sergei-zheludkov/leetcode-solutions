import { isAnagram } from './valid-anagram';

describe('valid anagram', () => {
  test.each([
    { s: 'anagram', t: 'nagaram' },
    { s: 'silent', t: 'listen' },
    { s: 'heart', t: 'earth' },
  ])('truthy cases', ({ s, t }) => {
    expect(isAnagram(s, t)).toBeTruthy();
  });

  test.each([
    { s: 'a', t: 'ab' },
    { s: 'rat', t: 'car' },
    { s: 'mama', t: 'amom' },
    { s: 'polynarya', t: 'polynaryb' },
  ])('falsy cases', ({ s, t }) => {
    expect(isAnagram(s, t)).toBeFalsy();
  });
});
