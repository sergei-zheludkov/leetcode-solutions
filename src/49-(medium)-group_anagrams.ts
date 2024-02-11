// link to problem: https://leetcode.com/problems/group-anagrams/

const test1_arr = ["eat","tea","tan","ate","nat","bat"];
const test2_arr = [""];
const test3_arr = ["a"];
const test4_arr = ["ac","c"];
const test5_arr = ["","b"];
const test6_arr = ["ddddddddddg","dgggggggggg"];
const test7_arr = ["vac", "c", "c", "c", "a", "v"];

function groupAnagrams(strArr: string[]): string[][] {
  const collection = new Map<string, string[]>();

  for (let step = 0; step < strArr.length; step++) {
    const str = strArr[step];
    const key = str.split('').sort().join('');

    const itemArr = collection.get(key);

    if (itemArr) {
      collection.set(key, [...itemArr, str]);
    } else {
      collection.set(key, [str]);
    }
  }

  return Array.from(collection.values());
}

console.log('test_1: => \n[["bat"],["nat","tan"],["ate","eat","tea"]]\n', groupAnagrams(test1_arr));
console.log('test_2: => \n[[""]]\n', groupAnagrams(test2_arr));
console.log('test_3: => \n[["a"]]\n', groupAnagrams(test3_arr));
console.log('test_4: => \n[["c"],["ac"]]\n', groupAnagrams(test4_arr));
console.log('test_5: => \n[["b"],[""]]\n', groupAnagrams(test5_arr));
console.log('test_6: => \n[["dgggggggggg"],["ddddddddddg"]]\n', groupAnagrams(test6_arr));
console.log('test_7: => \n[["v"],["a"],["c","c","c"],["vac"]]\n', groupAnagrams(test7_arr));

export { groupAnagrams };


// PREV SOLUTIONS

// function groupAnagrams(strArr: string[]): string[][] {
//   const result: string[][] = [];
//   // console.log('--------------------------------------')
//
//   for (let strArrStep = 0; strArrStep < strArr.length; strArrStep++) {
//     const str = strArr[strArrStep];
//
//     let checkedStr = str;
//     let resultArrayStep = 0;
//     let added = false;
//     // console.log('strArr.forEach', { str, checkedStr })
//
//     for (; resultArrayStep < result.length; resultArrayStep++) {
//       const anagramLetters = result[resultArrayStep][0];
//
//       // console.log('before checking:', anagramLetters)
//
//       for (let letterStep = 0; letterStep < anagramLetters.length; letterStep++) {
//         const letter = anagramLetters[letterStep];
//
//         checkedStr = checkedStr.replace(letter, "");
//       }
//
//       // console.log('after checking:', anagramLetters, 'checkedStr:', checkedStr)
//       if (!checkedStr && str.length === anagramLetters.length) {
//         result[resultArrayStep].push(str);
//         // console.log('PUSHED:|', str,'| INTO:', resultArrayStep)
//         added = true;
//         break;
//       }
//       checkedStr = str
//     }
//
//     // console.log('PUSHED NEW:', str)
//     if (!added) {
//       result.push([str]);
//     }
//   }
//
//   return result;
// }

// function groupAnagrams(strArr: string[]): string[][] {
//   const result: string[][] = [];
//
//   strArr.forEach((str) => {
//     const lettersArr = str.split('');
//     const resultArr: string[] = [];
//
//     let resultArrayStep = 0
//
//     for (; resultArrayStep < result.length; resultArrayStep++) {
//       const anagram = result[resultArrayStep][0] || "";
//
//       lettersArr.forEach((letter) => {
//         if (anagram.includes(letter)) {
//           resultArr.push(letter);
//         }
//       });
//
//       if (resultArr.join('') === str) {
//         console.log({ str, anagram, result: resultArr.join(''),  })
//         result[resultArrayStep].push(lettersArr.join(''));
//         return;
//       }
//
//       resultArr.length = 0
//     }
//
//     result.push([lettersArr.join('')]);
//   })
//
//   return result;
// }

// function groupAnagrams(strArr: string[]): string[][] {
//   const result = strArr.reduce<Record<string, Array<string>>>((resultAcc, str) => {
//     const letterCount = str.split('')
//       .reduce<Record<string, number>>((letterCountAcc, letter) => (
//         letterCountAcc[letter] ? { ...letterCountAcc, [letter]: letterCountAcc[letter] + 1 } : { ...letterCountAcc, [letter]: 1 }
//       ), {});
//
//     console.log({ letterCount });
//
//     const key = Object.entries(letterCount)
//       .sort(([letterA], [letterB]) => letterA < letterB ? - 1 : 1)
//       .map(([letter, count]) => `${letter}${count}`)
//       .join('');
//
//     return resultAcc[key] ? { ...resultAcc, [key]: [...resultAcc[key], str] } : { ...resultAcc, [key]: [str] };
//   }, {});
//
//   return Object.values(result);
// }