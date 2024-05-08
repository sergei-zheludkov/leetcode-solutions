import { findRelativeRanks } from './relative-ranks';

test.each([
  { score: [30], expected: ['Gold Medal'] },
  { score: [10,20], expected: ['Silver Medal','Gold Medal'] },
  { score: [5,4,3,2,1], expected: ['Gold Medal','Silver Medal','Bronze Medal','4','5'] },
  { score: [10,3,8,9,4], expected: ['Gold Medal','5','Bronze Medal','Silver Medal','4'] },
  { score: [90,100,240,39,20,1000,230,500], expected: ['6','5','Bronze Medal','7','8','Gold Medal','4','Silver Medal'] },
])('relative ranks', ({ score, expected }) => {
  expect(findRelativeRanks(score)).toEqual(expected);
});
