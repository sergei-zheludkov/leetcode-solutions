import { asteroidCollision } from './asteroid-collision';

test.each([
  { asteroids: [8,-8], expected: [] },
  { asteroids: [100,50,10,-100], expected: [] },
  { asteroids: [100,-50,-10,-100], expected: [] },
  { asteroids: [100,10,-50,-10,-100], expected: [] },
  { asteroids: [10,2,-5], expected: [10] },
  { asteroids: [5,10,-5], expected: [5,10] },
  { asteroids: [100,-100,50,10], expected: [50,10] },
  { asteroids: [11,10,-5,-3,11], expected: [11,10,11] },
  { asteroids: [5,10,12,13,15,-20], expected: [-20] },
  { asteroids: [5,10,12,13,15,-20,10], expected: [-20,10] },
  { asteroids: [5,10,12,13,15,-20,10,-2,-3,-5,5], expected: [-20,10,5] },
  { asteroids: [-2,-1,1,2], expected: [-2,-1,1,2] },
])('asteroid collision', ({ asteroids, expected }) => {
  expect(asteroidCollision(asteroids)).toEqual(expected);
});
