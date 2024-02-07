// link to problem: https://leetcode.com/problems/sort-characters-by-frequency

const test1_str = "tree";
const test2_str = "cccaaa";
const test3_str = "Aabb"

function frequencySort(str: string): string {
  const letterCount = str.split('')
    .reduce<Record<string, number>>((letterCountAcc, letter) => {
      if (letterCountAcc[letter]) {
        letterCountAcc[letter] += 1;
      } else {
        letterCountAcc[letter] = 1;
      }
      return letterCountAcc;
    } , {});

  return  Object.entries(letterCount)
    .sort(([, countA], [, countB]) => countA < countB ? 1 : -1)
    .reduce((acc, [letter, count]) => `${acc}${letter.repeat(count)}`, '');
}

console.log(`test 1: \n Expected: eert \n Output: ${frequencySort(test1_str)}`);
console.log(`test 2: \n Expected: aaaccc \n Output: ${frequencySort(test2_str)}`);
console.log(`test 3: \n Expected: bbAa \n Output: ${frequencySort(test3_str)}`);
