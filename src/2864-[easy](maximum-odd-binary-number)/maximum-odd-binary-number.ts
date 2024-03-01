export const maximumOddBinaryNumber = (str: string): string => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '1') {
      result = `1${result}`;
    } else {
      result = `${result}0`;
    }
  }

  return `${result.slice(1)}1`;
};

// export const maximumOddBinaryNumber = (str: string): string => {
//   const [first, ...rest] = str.split('')
//     .sort((a, b) => a < b ? 1 : -1);
//
//   return rest.join('').concat(first);
// };


