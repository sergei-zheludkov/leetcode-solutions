export const customSortString = (order: string, str: string): string => {
  const orderCollection: Record<string, number> = {};

  for (let i = 0; i < order.length; i++) {
    orderCollection[order[i]] = i;
  }

  const existed: string[] = [];
  let excepted: string = '';

  for (let i = 0; i < str.length; i++) {
    if (orderCollection[str[i]] !== undefined) {
      existed[orderCollection[str[i]]] = `${existed[orderCollection[str[i]]] ?? ''}${str[i]}`;
    } else {
      excepted = `${excepted}${str[i]}`;
    }
  }

  return existed.filter((item) => !!item)
    .join('')
    .concat(excepted);
};