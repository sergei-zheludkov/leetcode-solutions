import { getFirstOccurrenceIndex } from './find-the-index-of-the-first-occurrence-in-a-string';

test('find the index of the first occurrence in a string', () => {
  expect(getFirstOccurrenceIndex('sadbutsad', 'sad')).toBe(0);
  expect(getFirstOccurrenceIndex('leetcode', 'leeto')).toBe(-1);
  expect(getFirstOccurrenceIndex('', 'sad')).toBe(-1);
  expect(getFirstOccurrenceIndex('sadbutsad', '')).toBe(0);
  expect(getFirstOccurrenceIndex('', '')).toBe(0);
  expect(getFirstOccurrenceIndex('sadbutsad', 'sad')).toBe(0);
  expect(getFirstOccurrenceIndex('sadbutsad', 'but')).toBe(3);
});
