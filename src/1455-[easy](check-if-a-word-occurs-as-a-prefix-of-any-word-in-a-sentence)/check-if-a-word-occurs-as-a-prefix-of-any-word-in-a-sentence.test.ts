import { isPrefixOfWord } from './check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence';

test.each([
  { sentence:  'i am tired', searchWord: 'you', expected: -1 },
  { sentence:  'leetcode corona', searchWord: 'leetco', expected: 1 },
  { sentence:  'i love eating burger', searchWord: 'burg', expected: 4 },
  { sentence:  'this problem is an easy problem', searchWord: 'pro', expected: 2 },
])('check if a word occurs as a prefix of any word in a sentence', ({ sentence, searchWord, expected }) => {
  expect(isPrefixOfWord(sentence, searchWord)).toBe(expected);
});
