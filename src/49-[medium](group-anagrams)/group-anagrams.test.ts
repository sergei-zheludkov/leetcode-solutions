import { groupAnagrams } from './group-anagrams';

test('group anagrams', () => {
  expect(groupAnagrams(['eat','tea','tan','ate','nat','bat'])).toEqual([['eat','tea','ate'],['tan','nat'],['bat']]);
  expect(groupAnagrams(['vac', 'c', 'c', 'c', 'a', 'v'])).toEqual([['vac'],['c','c','c'],['a'],['v']]);
  expect(groupAnagrams(['ddddddddddg','dgggggggggg'])).toEqual([['ddddddddddg'],['dgggggggggg']]);
  expect(groupAnagrams(['ac','c'])).toEqual([['ac'],['c']]);
  expect(groupAnagrams(['','b'])).toEqual([[''],['b']]);
  expect(groupAnagrams(['a'])).toEqual([['a']]);
  expect(groupAnagrams([''])).toEqual([['']]);
});
