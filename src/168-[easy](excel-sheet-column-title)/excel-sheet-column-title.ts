const BASE = 65;
const MAX_LETTER_NUM = 26;

const getLetter = (num: number) => String.fromCharCode(BASE + num);

export const convertToTitle = (columnNumber: number): string => {
  if (columnNumber === 0) {
    return '';
  }

  const divider = (columnNumber - 1) % MAX_LETTER_NUM;
  const newColumnNumber = Math.floor((columnNumber - 1) / MAX_LETTER_NUM);

  return `${convertToTitle(newColumnNumber)}${getLetter(divider)}`;
};
