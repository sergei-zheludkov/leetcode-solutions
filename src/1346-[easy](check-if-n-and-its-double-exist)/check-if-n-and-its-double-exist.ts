export const checkIfExist = (arr: number[]): boolean => {
  const collection = new Set(arr);

  let hard = false;

  for (const num of arr) {
    collection.delete(num);

    if (collection.has(num / 2) || (!num && hard)) {
      return true;
    }

    collection.add(num);

    if (!hard && !num) {
      hard = true;
    }
  }

  return false;
};
