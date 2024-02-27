export const isIsomorphic = (s: string, t: string): boolean => {
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

// export const isIsomorphic = (s: string, t: string): boolean => {
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
