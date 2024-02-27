export const longestCommonPrefix = (strs: string[]): string => {
  if (!strs.length) {
    return '';
  }

  const [first = '', ...rest] = strs;
  let prefix = first;

  for (let index = 0; index < rest.length; index++) {
    const str = rest[index];

    while (str.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
};

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
