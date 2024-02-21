// link to problem: https://leetcode.com/problems/isomorphic-strings

const test1_word1 = 'egg';
const test1_word2 = 'add';
const test2_word1 = 'foo';
const test2_word2 = 'bar';
const test3_word1 = 'paper';
const test3_word2 = 'title';
const test4_word1 = 'krul';
const test4_word2 = 'manu';
const test5_word1 = 'foo2gs';
const test5_word2 = 'baates';
const test6_word1 = 'fae2gs';
const test6_word2 = 'bootes';

const isIsomorphic = (s: string, t: string): boolean => {
  const map = new Map<string, string>();
  const set = new Set<string>();

  for (let index = 0; index < s.length; index++) {
    const sLetter = s[index];
    const tLetter = t[index];

    if (map.has(sLetter)) {
      if (map.get(sLetter) !== tLetter) {
        return false;
      }
    } else {
      if (set.has(tLetter)) {
        return false;
      }

      map.set(sLetter, tLetter);
      set.add(tLetter);
    }
  }

  return true;
};

// const isIsomorphic = (s: string, t: string): boolean => {
//   const mapS = new Map<string, number[]>();
//   const mapT = new Map<string, number[]>();
//
//   for (let index = 0; index < s.length; index++) {
//     const sLetter = s[index];
//     const tLetter = t[index];
//
//     const mapItemS = mapS.get(sLetter);
//     mapS.set(sLetter, mapItemS ? [...mapItemS, index] : [index]);
//
//     const mapItemT = mapT.get(tLetter);
//     mapT.set(tLetter, mapItemT ? [...mapItemT, index] : [index]);
//   }
//
//   const a = Array.from(mapS.values())
//     .map((elem) => `[${elem}]`)
//     .toString();
//   const b = Array.from(mapT.values())
//     .map((elem) => `[${elem}]`)
//     .toString();
//
//   return a === b;
// };

console.log(`Test1: \n EXPECTED: true \n OUTPUT: ${isIsomorphic(test1_word1, test1_word2)}`);
console.log(`Test2: \n EXPECTED: false \n OUTPUT: ${isIsomorphic(test2_word1, test2_word2)}`);
console.log(`Test3: \n EXPECTED: true \n OUTPUT: ${isIsomorphic(test3_word1, test3_word2)}`);
console.log(`Test4: \n EXPECTED: true \n OUTPUT: ${isIsomorphic(test4_word1, test4_word2)}`);
console.log(`Test5: \n EXPECTED: true \n OUTPUT: ${isIsomorphic(test5_word1, test5_word2)}`);
console.log(`Test6: \n EXPECTED: false \n OUTPUT: ${isIsomorphic(test6_word1, test6_word2)}`);


export { isIsomorphic };
