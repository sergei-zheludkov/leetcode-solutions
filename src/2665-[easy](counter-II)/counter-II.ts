type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
}

export const createCounter = (init: number): Counter => {
  let counter = init;

  return {
    increment: () => ++counter,
    decrement: () => --counter,
    reset: () => {
      counter = init;
      return counter;
    },
  };
};
