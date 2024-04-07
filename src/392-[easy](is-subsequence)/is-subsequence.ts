export const isSubsequence = (s: string, t: string): boolean => {
  let pointer = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[pointer]) {
      pointer += 1;
    }
  }

  return pointer === s.length;
};