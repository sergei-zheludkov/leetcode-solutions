/* eslint-disable @typescript-eslint/ban-ts-comment */
export function groupBy<T>(func: (item: T) => string) {
  // @ts-ignore
  return this.reduce((acc, elem) => {
    const key = func(elem);
    if (acc[key]) {
      acc[key].push(elem);
    } else {
      acc[key] = [elem];
    }
    return acc;
  }, {});
}
