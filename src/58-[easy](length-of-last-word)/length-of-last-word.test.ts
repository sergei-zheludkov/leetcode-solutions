import { lengthOfLastWord } from './length-of-last-word';

test('length of last word', () => {
  expect(lengthOfLastWord('Hello World')).toBe(5);
  expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
  expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
  expect(lengthOfLastWord('kukarek')).toBe(7);
});
