import { removeElement } from './remove-element';

test('remove element', () => {
  expect(removeElement([3,2,2,3], 3)).toBe(2);
  expect(removeElement([0,1,2,2,3,0,4,2], 2)).toBe(5);
  expect(removeElement([1,2,3,4,5], 6)).toBe(5);
  expect(removeElement([3,3,3,3,3], 3)).toBe(0);
  expect(removeElement([1], 3)).toBe(1);
  expect(removeElement([3], 3)).toBe(0);
  expect(removeElement([], 3)).toBe(0);
});
