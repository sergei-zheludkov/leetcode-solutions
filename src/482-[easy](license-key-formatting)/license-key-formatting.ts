export const licenseKeyFormatting = (code: string, k: number): string => {
  let result = '';
  let blockLen = k;

  for (let i = code.length - 1; i >= 0; i--) {
    if (code[i] !== '-') {
      result = `${code[i].toLocaleUpperCase()}${result}`;
      blockLen--;
    }

    if (!blockLen && i) {
      result = `-${result}`;
      blockLen = k;
    }
  }

  return result.startsWith('-') ? result.slice(1) : result;
};
