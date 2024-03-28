import { reverseString } from '../344-[easy](reverse-string)/reverse-string';

export const reverseWords = (str: string): string => str
  .split(' ')
  .map((word) => {
    const chars = word.split('');

    reverseString(chars);

    return chars.join('');
  })
  .join(' ');
