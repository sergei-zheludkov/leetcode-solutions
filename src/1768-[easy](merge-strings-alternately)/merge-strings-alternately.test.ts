import { mergeAlternately } from './merge-strings-alternately';

test.each([
  { str1: '', str2: '', expected: '' },
  { str1: '', str2: 'abcde', expected: 'abcde' },
  { str1: 'abcde', str2: '', expected: 'abcde' },
  { str1: 'abc', str2: 'pqr', expected: 'apbqcr' },
  { str1: 'ab', str2: 'pqrs', expected: 'apbqrs' },
  { str1: 'abcd', str2: 'pq', expected: 'apbqcd' },
])('merge strings alternately', ({ str1, str2, expected }) => {
  expect(mergeAlternately(str1, str2)).toBe(expected);
});
