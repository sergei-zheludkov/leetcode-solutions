// link to problem: https://leetcode.com/problems/counter

const test1_num = 10;
const test2_num = -2;

const createCounter = (n: number) => {
  let counter = n;
  return () => counter++;
};

{
  const counter = createCounter(test1_num);
  const expected = [10,11,12];

  expected.forEach((result) => {
    console.log(`test 1 \n EXPECTED: ${result} \n OUTPUT:`, counter());
  })
}

{
  const counter = createCounter(test2_num);
  const expected = [-2,-1,0,1,2];

  expected.forEach((result) => {
    console.log(`test 2 \n EXPECTED: ${result} \n OUTPUT:`, counter());
  })
}

export { createCounter };
