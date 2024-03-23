const getNumber = (letter: string) => letter.charCodeAt(0) - 64;

export const titleToNumber = (columnTitle: string, step = 0): number => {
  if (!columnTitle.length) {
    return 0;
  }

  return getNumber(columnTitle[columnTitle.length - 1])
    * 26
    ** step
    + titleToNumber(columnTitle.slice(0, -1), step + 1);
};

// export const titleToNumber = (columnTitle: string): number => {
//   let result = 0;
//
//   const lastIndex = columnTitle.length - 1;
//
//   for (let i = lastIndex; i >= 0; i--) {
//     result += getNumber(columnTitle[i]) * 26 ** (lastIndex - i);
//   }
//
//   return result;
// };
