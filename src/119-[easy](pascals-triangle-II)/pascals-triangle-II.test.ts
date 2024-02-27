import { getRow } from './pascals-triangle-II';

test('pascals triangle II', () => {
  expect(getRow(0)).toStrictEqual([1]);
  expect(getRow(1)).toStrictEqual([1,1]);
  expect(getRow(3)).toStrictEqual([1,3,3,1]);
  expect(getRow(5)).toStrictEqual([1,5,10,10,5,1]);
  expect(getRow(7)).toStrictEqual([1,7,21,35,35,21,7,1]);
  expect(getRow(9)).toStrictEqual([1,9,36,84,126,126,84,36,9,1]);
  expect(getRow(30)).toStrictEqual([1,30,435,4060,27405,142506,593775,2035800,5852925,14307150,30045015,54627300,86493225,119759850,145422675,155117520,145422675,119759850,86493225,54627300,30045015,14307150,5852925,2035800,593775,142506,27405,4060,435,30,1]);
});
