import { longestCommonPrefix } from './longest-common-prefix';

test('longest common prefix', () => {
  expect(longestCommonPrefix(['flower','flow','flight'])).toBe('fl');
  expect(longestCommonPrefix(['dog','racecar','car'])).toBe('');
  expect(longestCommonPrefix(['doger','kukarek','kukny'])).toBe('');
  expect(longestCommonPrefix(['flower','flow','flight','man'])).toBe('');
  expect(longestCommonPrefix(['kuni','kukarek','kukny'])).toBe('ku');
  expect(longestCommonPrefix([])).toBe('');
});
