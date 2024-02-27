import { frequencySort } from './sort-characters-by-frequency';

test('sort characters by frequency', () => {
  expect(frequencySort('tree')).toBe('eert');
  expect(frequencySort('Aabb')).toBe('bbaA');
  expect(frequencySort('cccaaa')).toBe('aaaccc');
});
