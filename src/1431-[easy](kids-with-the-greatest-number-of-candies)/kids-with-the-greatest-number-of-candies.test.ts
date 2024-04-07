import { kidsWithCandies } from './kids-with-the-greatest-number-of-candies';

test.each([
  { candies: [2,3,5,1,3], extra: 3, expected: [true,true,true,false,true] },
  { candies: [4,2,1,1,2], extra: 1, expected: [true,false,false,false,false] },
  { candies: [12,1,12], extra: 10, expected: [true,false,true] },
])('kids with the greatest number of candies', ({ candies, extra, expected }) => {
  expect(kidsWithCandies(candies, extra)).toEqual(expected);
});
