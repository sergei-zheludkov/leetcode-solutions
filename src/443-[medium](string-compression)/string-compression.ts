export const compress = (chars: string[]): number => {
  let l = chars.length - 2;
  let r = chars.length - 1;

  while (l >= -1) {
    if (chars[l] !== chars[r]) {
      const count = r - l;
      const items =  count > 1 ? String(count).split('') : [];

      chars.splice(l + 1, count, chars[r], ...items);

      r = l;
    }

    l--;
  }

  return chars.length;
};