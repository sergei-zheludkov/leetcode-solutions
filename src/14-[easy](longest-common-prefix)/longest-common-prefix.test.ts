import { longestCommonPrefix } from './longest-common-prefix';

describe('longest common prefix', () => {
  test.each([
    { array: [] },
    { array: ['dog','racecar','car'] },
    { array: ['doger','kukarek','kukny'] },
    { array: ['flower','flow','flight','man'] },
  ])('empty cases', ({ array }) => {
    expect(longestCommonPrefix(array)).toBe('');
  });

  test.each([
    { array: ['flower','flow','flight'], expected: 'fl' },
    { array: ['kuni','kukarek','kukny'], expected: 'ku' },
  ])('prefix cases', ({ array, expected }) => {
    expect(longestCommonPrefix(array)).toBe(expected);
  });
});
