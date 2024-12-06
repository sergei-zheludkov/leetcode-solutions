export const isPrefixOfWord = (sentence: string, searchWord: string): number => {
  let i = 0, counter = 0;
  sentence = ' ' + sentence;

  while (i < sentence.length) {
    if (sentence[i] === ' ') {
      counter++;

      let j = 0;

      while (j < searchWord.length) {
        if (sentence[i+1] !== searchWord[j]) {
          break;
        }

        i++; j++;
      }

      if (j === searchWord.length) {
        return counter;
      }
    }

    i++;
  }

  return i === sentence.length ? -1 : counter;
};
