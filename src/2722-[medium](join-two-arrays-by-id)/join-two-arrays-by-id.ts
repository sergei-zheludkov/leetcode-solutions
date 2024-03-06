type JSONValue = undefined | null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

export const join = (arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] => {
  const collection = new Map<number, ArrayType>();

  for (const elem of arr1) {
    collection.set(elem.id, elem);
  }

  for (const elem of arr2) {
    collection.set(
      elem.id,
      collection.has(elem.id) ? { ...collection.get(elem.id), ...elem } : elem,
    );
  }

  return Array.from(collection.values()).sort(({ id: a }, { id: b }) => a - b);
};
