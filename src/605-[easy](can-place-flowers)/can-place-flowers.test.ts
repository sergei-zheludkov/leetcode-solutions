import { canPlaceFlowers } from './can-place-flowers';

describe('can place flowers', () => {
  test.each([
    { flowerbed: [1,0,0,0,1], n: 1 },
    { flowerbed: [0,0,1,0,0], n: 1 },
    { flowerbed: [1,0,0,0,1,0,0], n: 2 },
    { flowerbed: [1,0,0,0,1,0,0,0], n: 2 },
    { flowerbed: [0,0,0,0,1,0,0,0], n: 0 },
  ])('truthy cases', ({ flowerbed, n }) => {
    expect(canPlaceFlowers(flowerbed, n)).toBeTruthy();
  });

  test.each([
    { flowerbed: [1,0,0,0,1], n: 2 },
    { flowerbed: [1,0,0,0,1,0], n: 2 },
    { flowerbed: [1,0,0,0,0,1], n: 2 },
    { flowerbed: [1,0,0,0,1,0,0,0], n: 3 },
  ])('falsy cases', ({ flowerbed, n }) => {
    expect(canPlaceFlowers(flowerbed, n)).toBeFalsy();
  });
});
