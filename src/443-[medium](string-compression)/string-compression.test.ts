import { compress } from './string-compression';

test.each([
  { chars: ['a'], expected: ['a'] },
  { chars: ['a','a','b','b','c','c','c'], expected: ['a','2','b','2','c','3'] },
  { chars: ['a','b','b','b','b','b','b','b','b','b','b','b','b'], expected: ['a','b','1','2'] },
  { chars: ['a','b','b','b','b','c','c','b','b','b','b','b','b'], expected: ['a','b','4','c','2','b','6'] },
  { chars: ['a','b','c','d','e','f','g'], expected: ['a','b','c','d','e','f','g'] },
  { chars: ['a','b','b','b','b','c','c','b','b','b','a','b','b','b'], expected: ['a','b','4','c','2','b','3','a','b','3'] },
])('string compression', ({ chars, expected }) => {
  compress(chars);

  expect(chars).toEqual(expected);
});
