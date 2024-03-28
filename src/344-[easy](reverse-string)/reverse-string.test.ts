import { reverseString } from './reverse-string';

test.each([
  { str: ['h','e','l','l','o'], expected: ['o','l','l','e','h'] },
  { str: ['H','a','n','n','a','h'], expected: ['h','a','n','n','a','H'] },
  { str: ['K','r','u','C','h','e','r','r','y'], expected: ['y','r','r','e','h','C','u','r','K'] },
])('reverse string', ({ str, expected }) => {
  reverseString(str);

  expect(str).toEqual(expected);
});
