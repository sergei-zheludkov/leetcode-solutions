export const minExtraChar = (s: string, dictionary: string[]): number => {
  const set = new Set<string>(dictionary);
  const map = new Map<string, number>();

  const search = (str: string) => {
    if (!str.length) {
      return str.length;
    }

    const mins: number[] = [];

    let count = 0;

    for (let i = 0; i < str.length; i++) {
      const cur = str.slice(0, i + 1);

      if (set.has(cur)) {
        const key = str.slice(i + 1);
        mins.push(map.get(key) ?? search(key));
        count = 0;
      } else {
        count++;
      }
    }

    const min = Math.min(...mins, count);
    const res = Math.min(min, 1 + search(str.slice(1)));

    map.set(str, res);

    return res;
  };

  return search(s);
};

// '_______zai_____oim______bak'

// export const minExtraChar = (str: string, dictionary: string[]): number => {
//   const result = str.split('');
//
//   for (const word of dictionary) {
//     let checkingStr = str;
//
//     for (let index = checkingStr.indexOf(word); ~index; index = checkingStr.indexOf(word)) {
//       checkingStr = checkingStr.replace(word, '_'.repeat(word.length));
//
//       result.splice(index, word.length, ...(new Array(word.length).fill('_')));
//     }
//   }
//
//   console.log(result.join(''));
//
//   return (result.join('').replaceAll('_', '')).length;
// };

// '_______zai_____oim______bak'