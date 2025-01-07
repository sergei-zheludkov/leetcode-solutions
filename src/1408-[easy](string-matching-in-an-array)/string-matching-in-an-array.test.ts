import { stringMatching } from './string-matching-in-an-array';

test.each([
  { words: ['leetcoder','leetcode','od','hamlet','am'], expected: ['leetcode','od','am'] },
  { words: ['mass','as','hero','superhero'], expected: ['as','hero'] },
  { words: ['leetcode','et','code'], expected: ['et','code'] },
  { words: ['blue','green','bu'], expected: [] },
])('string matching in an array', ({ words, expected }) => {
  expect(stringMatching(words)).toEqual(expected);
});
