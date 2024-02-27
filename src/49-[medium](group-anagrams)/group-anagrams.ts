export const groupAnagrams = (strArr: string[]): string[][] => {
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
};

// PREV SOLUTIONS

// export const groupAnagrams = (strArr: string[]): string[][] => {
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

// export const groupAnagrams = (strArr: string[]): string[][] => {
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