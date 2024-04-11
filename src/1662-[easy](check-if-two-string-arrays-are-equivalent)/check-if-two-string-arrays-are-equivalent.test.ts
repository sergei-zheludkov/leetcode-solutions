import { arrayStringsAreEqual } from './check-if-two-string-arrays-are-equivalent';

describe('check if two string arrays are equivalent', () => {
  test.each([
    { word1: [''], word2: ['', ''] },
    { word1: ['ab','c'], word2: ['a','bc'] },
    { word1: ['abc','d','defg'], word2: ['abcddefg'] },
    { word1: ['a','b','c', 'd', 'd','e','f','g'], word2: ['abcd','defg'] },
  ])('truthy cases', ({ word1, word2 }) => {
    expect(arrayStringsAreEqual(word1, word2)).toBeTruthy();
  });

  test.each([
    { word1: ['a', 'cb'], word2: ['ab', 'c'] },
    { word1: ['a','b','c', 'd', 'd','e','f','g'], word2: ['defg','abcd'] },
  ])('falsy cases', ({ word1, word2 }) => {
    expect(arrayStringsAreEqual(word1, word2)).toBeFalsy();
  });
});


