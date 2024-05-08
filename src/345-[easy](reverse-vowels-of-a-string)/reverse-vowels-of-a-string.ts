const vowelChars = ['a','e','i','o','u'];
const vowels = new Set(vowelChars.concat(vowelChars.map((char) => char.toUpperCase())));

export const reverseVowels = (str: string): string => {
  const chars = str.split('');
  let i = 0;
  let j = chars.length - 1;

  while (i < j) {
    if (vowels.has(chars[i]) && vowels.has(chars[j])) {
      [chars[i], chars[j]] = [chars[j], chars[i]];
      i++;
      j--;
    } else if (!vowels.has(chars[i])) {
      i++;
    } else if (!vowels.has(chars[j])) {
      j--;
    }
  }

  return chars.join('');
};
