import { isCircularSentence } from './circular-sentence';

describe('circular sentence', () => {
  test.each([
    { sentence: 'eetcode' },
    { sentence: 'leetcode eats soul' },
    { sentence: 'leetcode exercises sound delightful' },
  ])('truthy cases', ({ sentence }) => {
    expect(isCircularSentence(sentence)).toBeTruthy();
  });

  test.each([
    { sentence: 'Leetcode is cool' },
    { sentence: 'happy Leetcode' },
    { sentence: 'Leetcode' },
    { sentence: 'I like Leetcode' },
    { sentence: 'MuFoevIXCZzrpXeRmTssj lYSW U jM' },
  ])('falsy cases', ({ sentence }) => {
    expect(isCircularSentence(sentence)).toBeFalsy();
  });
});
