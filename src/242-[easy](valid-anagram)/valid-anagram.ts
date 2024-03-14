export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }

  const collection = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const item = collection.get(s[i]);

    collection.set(s[i], item ? item + 1 : 1);
  }

  for (let i = 0; i < t.length; i++) {
    const item = collection.get(t[i]);

    if (item === 1) {
      collection.delete(t[i]);
    } else if (item) {
      collection.set(t[i], item - 1);
    }
  }

  return !collection.size;
};

// export const isAnagram = (s: string, t: string): boolean => {
//   const result = s.split('');
//
//   for (const char of t) {
//     if (!result.length) {
//       return false;
//     }
//
//     const index = result.indexOf(char);
//
//     if (~index) {
//       result.splice(index,1);
//     }
//   }
//
//   return !result.length;
// };
