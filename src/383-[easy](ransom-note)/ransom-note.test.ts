import { canConstruct } from './ransom-note';

describe('ransom note', () => {
  test.each([
    { ransomNote: 'aa', magazine: 'aab' },
    { ransomNote: 'paradox', magazine: 'aabpdoxr' },
  ])('truthy cases', ({ ransomNote, magazine }) => {
    expect(canConstruct(ransomNote, magazine)).toBeTruthy();
  });

  test.each([
    { ransomNote: 'a', magazine: 'b' },
    { ransomNote: 'aa', magazine: 'ab' },
  ])('falsy cases', ({ ransomNote, magazine }) => {
    expect(canConstruct(ransomNote, magazine)).toBeFalsy();
  });
});
