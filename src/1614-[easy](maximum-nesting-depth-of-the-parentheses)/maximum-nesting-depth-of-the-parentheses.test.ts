import { maxDepth } from './maximum-nesting-depth-of-the-parentheses';

test.each([
  { str: '(1)+((2))+(((3)))', expected: 3 },
  { str: '(1+(2*3)+((8)/4))+1', expected: 3 },
  { str: '1*(2+3)*((1*1)+(3+1))', expected: 2 },
])('maximum nesting depth of the parentheses', ({ str, expected }) => {
  expect(maxDepth(str)).toBe(expected);
});