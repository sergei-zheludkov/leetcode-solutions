import { climbStairs } from './climbing-stairs';

test('climbing stairs', () => {
  expect(climbStairs(2)).toEqual( 2);
  expect(climbStairs(3)).toEqual( 3);
  expect(climbStairs(4)).toEqual( 5);
  expect(climbStairs(5)).toEqual( 8);
  expect(climbStairs(6)).toEqual( 13);
  expect(climbStairs(7)).toEqual( 21);
  expect(climbStairs(8)).toEqual( 34);
  expect(climbStairs(9)).toEqual( 55);
});
