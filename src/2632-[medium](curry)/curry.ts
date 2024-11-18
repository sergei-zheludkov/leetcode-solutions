export type FC = (...args: number[]) => FC | number;

export const curry = (fn: FC): FC  => {
  const curried: FC = (...args) => args.length >= fn.length ? fn(...args) : (...moreArgs) => curried(...args, ...moreArgs);

  return curried;
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
