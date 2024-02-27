import { summaryRanges } from './summary-ranges';

test('summary ranges', () => {
  expect(summaryRanges([0,2,4,7])).toEqual(['0','2','4','7']);
  expect(summaryRanges([0,1,2,4,5,7])).toEqual(['0->2','4->5','7']);
  expect(summaryRanges([0,2,3,4,6,8,9])).toEqual(['0','2->4','6','8->9']);
  expect(summaryRanges([-1000000000,-9999,0,1,2,10,100,1000,999999999,1000000000]))
    .toEqual(['-1000000000','-9999','0->2','10','100','1000','999999999->1000000000']);
});
