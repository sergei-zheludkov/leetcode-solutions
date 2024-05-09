import { smallestSubsequence } from './smallest-subsequence-of-distinct-characters';

test.each([
  { str: 'bcabc', expected: 'abc' },
  { str: 'cbacdcbc', expected: 'acdb' },
  { str: 'foqkfpwqekqwmcosdmcokmwevmw', expected: 'fkpeqcosdmvw' },
  { str: 'lxzcppqekfqoefzoidsfpaa', expected: 'lxcekfqozidspa' },
  { str: 'qpdcpsemazslfdjfaifq', expected: 'cpemazsldjfiq' },
  { str: 'qpqmxlvnfirnicldsmaodmnaqkewmicsmqeofdjerwflsapdoqdq', expected: 'mxlvadnkeicfjrwspoq' },
  { str: 'ghfjdksieruieowqalksmjndfhgjfkcmnvbhfujdknhfudiskjhfgujrew', expected: 'deioqalcmnvbfhskgujrw' },
  { str: 'pwqoieuryeiwoqpwoeirutrieowqhfjdksldjfhgjdksjdhfgjdkbcnxmcbvncmx', expected: 'eryioputwqdklfgjshbcmvnx' },
])('smallest subsequence of distinct characters', ({ str, expected }) => {
  expect(smallestSubsequence(str)).toBe(expected);
});