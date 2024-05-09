import { removeDuplicateLetters } from './remove-duplicate-letters';

test.each([
  { str: 'bcabc', expected: 'abc' },
  { str: 'cbacdcbc', expected: 'acdb' },
  { str: 'foqkfpwqekqwmcosdmcokmwevmw', expected: 'fkpeqcosdmvw' },
  { str: 'lxzcppqekfqoefzoidsfpaa', expected: 'lxcekfqozidspa' },
  { str: 'qpdcpsemazslfdjfaifq', expected: 'cpemazsldjfiq' },
  { str: 'qpqmxlvnfirnicldsmaodmnaqkewmicsmqeofdjerwflsapdoqdq', expected: 'mxlvadnkeicfjrwspoq' },
  { str: 'ghfjdksieruieowqalksmjndfhgjfkcmnvbhfujdknhfudiskjhfgujrew', expected: 'deioqalcmnvbfhskgujrw' },
  { str: 'pwqoieuryeiwoqpwoeirutrieowqhfjdksldjfhgjdksjdhfgjdkbcnxmcbvncmx', expected: 'eryioputwqdklfgjshbcmvnx' },
])('remove duplicate letters', ({ str, expected }) => {
  expect(removeDuplicateLetters(str)).toBe(expected);
});