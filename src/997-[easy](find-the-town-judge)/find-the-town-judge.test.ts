import { findJudge } from './find-the-town-judge';

describe('find the town judge', () => {
  test('success judge', () => {
    expect(findJudge(2, [[1,2]])).toBe(2);
    expect(findJudge(3, [[1,3],[2,3]])).toBe(3);
    expect(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]])).toBe(3);
    expect(findJudge(1, [])).toBe(1);
  });

  test('judge not found', () => {
    expect(findJudge(3, [[1,3],[2,3],[3,1]])).toBe(-1);
    expect(findJudge(2, [[1,2],[2,1]])).toBe(-1);
    expect(findJudge(2, [])).toBe(-1);
  });
});
