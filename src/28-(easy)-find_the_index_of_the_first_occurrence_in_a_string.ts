// link to problem: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

const test1_haystack = "sadbutsad", test1_needle = "sad";
const test2_haystack = "leetcode", test2_needle = "leeto";

function getFirstOccurrenceIndex(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
}

console.log('test1: \n EXPECTED: 0 \n OUTPUT:', getFirstOccurrenceIndex(test1_haystack, test1_needle))
console.log('test2: \n EXPECTED: -1 \n OUTPUT:', getFirstOccurrenceIndex(test2_haystack, test2_needle))

export { getFirstOccurrenceIndex };