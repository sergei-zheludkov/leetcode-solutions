// link to problem: https://leetcode.com/problems/counter-ii

const test1_init = 5;
const test1_calls: Array<keyof Counter> = ["increment", "reset", "decrement"];
const test2_init = 0;
const test2_calls: Array<keyof Counter> = ["increment", "increment", "decrement", "reset", "reset"];

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
}

const createCounter = (init: number): Counter => {
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

{
  const expected = [6,5,4];
  const counter = createCounter(test1_init);

  test1_calls.forEach((action, index) => {
    console.log(`test 1 \n EXPECTED: ${expected[index]} \n OUTPUT:`, counter[action]());
  });
}

{
  const expected = [1,2,1,0,0];
  const counter = createCounter(test2_init);

  test2_calls.forEach((action, index) => {
    console.log(`test 2 \n EXPECTED: ${expected[index]} \n OUTPUT:`, counter[action]());
  });
}

export { createCounter };
