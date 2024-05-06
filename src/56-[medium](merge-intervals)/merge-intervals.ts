export const merge = (intervals: number[][]): number[][] => {
  intervals.sort(([a], [b]) => b-a);

  for (let i = intervals.length-2; i >= 0; i--) {
    //
    // console.log(
    //   '\n curr:', intervals[i],
    //   '\n next:', intervals[i+1],
    // );

    if (
      (intervals[i][0] >= intervals[i + 1][0] && intervals[i][0] <= intervals[i + 1][1]) // ||
    ) {
      intervals[i][0] = Math.min(intervals[i][0], intervals[i+1][0]);
      intervals[i][1] = Math.max(intervals[i][1], intervals[i+1][1]);

      intervals.splice(i+1, 1);
    }
  }

  // console.log(intervals);

  return intervals.reverse();
};