export function largestDivisibleSubset(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const divisibleForwardKits = nums
    .sort((a, b) => a - b)
    .reduce<number[][]>((acc, num) => {
      for (let step = 0; step < acc.length; step++) {
        const isSuitable = !acc[step]
          .filter((item) => num % item !== 0)
          .length;

        if (isSuitable) {
          acc[step].push(num);
        }
      }
      acc.push([num]);

      return acc;
    }, []);

  let theLongestLengthIndex = 0;

  nums.reverse().forEach((num => {
    for (let step = 0; step < divisibleForwardKits.length; step++) {
      if (divisibleForwardKits[step].includes(num)) {
        continue;
      }

      const isSuitable = !divisibleForwardKits[step]
        .filter((item) => item % num !== 0)
        .length;

      if (isSuitable) {
        divisibleForwardKits[step].push(num);
      }

      const prevTheLongestLength = divisibleForwardKits[theLongestLengthIndex].length;
      const currentLength = divisibleForwardKits[step].length;

      if (prevTheLongestLength < currentLength) {
        theLongestLengthIndex = step;
      }
    }
  }));

  return divisibleForwardKits[theLongestLengthIndex];
}
