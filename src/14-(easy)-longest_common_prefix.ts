// link to problem: https://leetcode.com/problems/longest-common-prefix

const test1_arr = ["flower","flow","flight"];
const test2_arr = ["dog","racecar","car"];
const test3_arr = ["doger","kukarek","kukny"];
const test4_arr = ["flower","flow","flight","man"];
const test5_arr = ["kuni","kukarek","kukny"];
const test6_arr: string[] = [];

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) {
    return "";
  }

  const [first = "", ...rest] = strs;
  let prefix = first;

  for (let index = 0; index < rest.length; index++) {
    const str = rest[index];

    while (str.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
}

// PREV SOLUTION

// function longestCommonPrefix(strs: string[]): string {
//   const collection = new Map<string, number>();
//   const [first = "", ...rest] = strs;
//
//   for (let step = 1; step <= first.length; step++) {
//     const subs = first.substring(0, step);
//     collection.set(subs, 1);
//   }
//
//   for (let index = 0; index < rest.length; index++) {
//     const str = rest[index];
//
//     for (let step = 1; step <= str.length; step++) {
//       const subs = str.substring(0, step);
//       const subsCount = collection.get(subs);
//
//       if (subsCount !== undefined) {
//         collection.set(subs, subsCount + 1);
//       } else {
//         break
//       }
//     }
//   }
//
//   const filteredPrefixes = Array.from(collection.entries())
//     .filter(([_, count]) => count === strs.length);
//
//   return filteredPrefixes[filteredPrefixes.length - 1]?.[0] || "";
// }

console.log(`test1: \n ARRAY: ${test1_arr} \n EXPECTED: "fl" \n OUTPUT:`, longestCommonPrefix(test1_arr));
console.log(`test2: \n ARRAY: ${test2_arr} \n EXPECTED: "" \n OUTPUT:`, longestCommonPrefix(test2_arr));
console.log(`test3: \n ARRAY: ${test3_arr} \n EXPECTED: "" \n OUTPUT:`, longestCommonPrefix(test3_arr));
console.log(`test4: \n ARRAY: ${test4_arr} \n EXPECTED: "" \n OUTPUT:`, longestCommonPrefix(test4_arr));
console.log(`test5: \n ARRAY: ${test5_arr} \n EXPECTED: "ku" \n OUTPUT:`, longestCommonPrefix(test5_arr));
console.log(`test5: \n ARRAY: ${test6_arr} \n EXPECTED: "" \n OUTPUT:`, longestCommonPrefix(test6_arr));

export { longestCommonPrefix };
