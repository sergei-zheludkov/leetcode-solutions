export const numberOfSteps = (num: number, counter = 0): number => {
  return !num ? counter : numberOfSteps(num & 1 ? num ^ 1 : num >> 1, counter + 1);
};

// export const numberOfSteps = (num: number): number => {
//   let counter = 0;
//
//   while (num) {
//     num = num & 1 ? num ^ 1 : num >> 1;
//
//     counter++;
//   }
//
//   return counter;
// };


// export const numberOfSteps = (num: number): number => {
//   let counter = 0;
//
//   while (num) {
//     num = num % 2 ? num - 1 : num / 2;
//
//     counter++;
//   }
//
//   return counter;
// };
