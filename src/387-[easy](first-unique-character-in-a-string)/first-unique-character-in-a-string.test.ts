import { firstUniqChar } from './first-unique-character-in-a-string';

test('first unique character in a string', () => {
  expect(firstUniqChar('leetcode')).toBe(0);
  expect(firstUniqChar('loveleetcode')).toBe(2);
  expect(firstUniqChar('aabb')).toBe(-1);
});
