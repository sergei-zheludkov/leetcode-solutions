export const clearDigits = (str: string): string => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if((/\d/).test(str[i])) {
      result = result.slice(0, -1);
    } else {
      result += str[i];
    }
  }

  return result;
};

