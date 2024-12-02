import { decodeString } from './decode-string';

test.each([
  { str: '3[a]2[bc]', expected: 'aaabcbc' },
  { str: '3[a2[c]]', expected: 'accaccacc' },
  { str: '2[abc]3[cd]ef', expected: 'abcabccdcdcdef' },
  { str: '3[a2[b]2[c4[z]de]3[ef]gh]', expected: 'abbczzzzdeczzzzdeefefefghabbczzzzdeczzzzdeefefefghabbczzzzdeczzzzdeefefefgh' },
  { str: '10[a4[l]20[g3[m]]]', expected: 'allllgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmallllgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmallllgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmallllgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmallllgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmallllgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmallllgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmallllgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmallllgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmallllgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmmgmmm' },
])('decode string', ({ str, expected }) => {
  expect(decodeString(str)).toEqual(expected);
});
