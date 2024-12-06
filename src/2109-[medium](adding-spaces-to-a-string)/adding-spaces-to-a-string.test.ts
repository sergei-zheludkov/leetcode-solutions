import { addSpaces } from './adding-spaces-to-a-string';

test.each([
  { str: 'spacing', spaces: [0,1,2,3,4,5,6], expected: ' s p a c i n g' },
  { str: 'EnjoyYourCoffee', spaces: [5,9], expected: 'Enjoy Your Coffee' },
  { str: 'icodeinpython', spaces: [1,5,7,9], expected: 'i code in py thon' },
  { str: 'LeetcodeHelpsMeLearn', spaces: [8,13,15], expected: 'Leetcode Helps Me Learn' },
])('adding spaces to a string', ({ str, spaces, expected }) => {
  expect(addSpaces(str, spaces)).toEqual(expected);
});
