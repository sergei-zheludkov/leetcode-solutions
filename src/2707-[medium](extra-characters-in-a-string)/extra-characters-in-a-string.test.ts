import { minExtraChar } from './extra-characters-in-a-string';

test.each([
  { str: 'leetscode', dictionary: ['leet','code','leetcode'], expected: 1 },
  { str: 'sayhelloworld', dictionary: ['hello','world'], expected: 3 },
  { str: 'sayhelloworld', dictionary: ['hello','world', 'selloworl'], expected: 3 },
  { str: 'sayhelloworld', dictionary: ['selloworl'], expected: 13 },
  { str: 'sayhelloworldhello', dictionary: ['hello','world'], expected: 3 },
  { str: 'dwmodizxvvbosxxw', dictionary: ['ox','lb','diz','gu','v','ksv','o','nuq','r','txhe','e','wmo','cehy','tskz','ds','kzbu'], expected: 7 },
  { str: 'kevlplxozaizdhxoimmraiakbak', dictionary: ['yv','bmab','hv','bnsll','mra','jjqf','g','aiyzi','ip','pfctr','flr','ybbcl','biu','ke','lpl','iak','pirua','ilhqd','zdhx','fux','xaw','pdfvt','xf','t','wq','r','cgmud','aokas','xv','jf','cyys','wcaz','rvegf','ysg','xo','uwb','lw','okgk','vbmi','v','mvo','fxyx','ad','e'], expected: 9 },
])('extra characters in a string', ({ str, dictionary, expected }) => {
  expect(minExtraChar(str, dictionary)).toEqual(expected);
});
