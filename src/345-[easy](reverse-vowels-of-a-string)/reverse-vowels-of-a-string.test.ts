import { reverseVowels } from './reverse-vowels-of-a-string';

test.each([
  { str: 'hello', expected: 'holle' },
  { str: 'leetcode', expected: 'leotcede' },
  { str: 'eoieouaaei', expected: 'ieaauoeioe' },
  { str: 'eOiEouAAei', expected: 'ieAAuoEiOe' },
  { str: 'edfowoirwkfeoufskaaei', expected: 'idfewaarwkfuoefskiooe' },
])('reverse vowels of a string', ({ str, expected }) => {
  expect(reverseVowels(str)).toBe(expected);
});
