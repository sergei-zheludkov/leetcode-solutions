// link to problem: https://leetcode.com/problems/find-the-town-judge

const test1_count = 2;
const test1_array = [[1,2]];

const test2_count = 3;
const test2_array = [[1,3],[2,3]];

const test3_count = 3;
const test3_array = [[1,3],[2,3],[3,1]];

const test4_count = 4;
const test4_array = [[1,3],[1,4],[2,3],[2,4],[4,3]];

const test5_count = 2;
const test5_array = [[1,2],[2,1]];

const test6_count = 1;
const test6_array: number[][] = [];

function findJudge(n: number, trust: number[][]): number {
  const countArray: number[] = new Array(n + 1).fill(0);

  for (const [person, judge] of trust) {
    countArray[person]--;
    countArray[judge]++;
  }

  return countArray.lastIndexOf(n - 1);
}


// function findJudge(n: number, trust: number[][]): number {
//   if (!trust.length && n === 1) {
//     return 1;
//   }
//
//   const judgeCollection = new Map<number, number>();
//   const personCollection = new Map<number, number>();
//
//   for (let index = 0; index < trust.length; index++) {
//     const [person, judge] = trust[index];
//
//     const personCount = judgeCollection.get(judge);
//     judgeCollection.set(judge, personCount ? personCount + 1 : 1);
//
//     const judgeCount = personCollection.get(person);
//     personCollection.set(person, judgeCount ? judgeCount + 1 : 1);
//   }
//
//   const judgesArray = Array.from(judgeCollection.entries());
//
//   for (let index = 0; index < judgesArray.length; index++) {
//     const [id, count] = judgesArray[index];
//
//     if (count === n-1 && !personCollection.has(id)) {
//       return id;
//     }
//   }
//
//   return -1;
// }

// const findJudge = (n: number, trust: number[][]): number => {
//   if (!trust.length && n === 1) {
//     return n;
//   }
//
//   const judges = new Map<number, number[]>();
//
//   for (let index = 0; index < trust.length; index++) {
//     const [person, judge] = trust[index];
//     const elem = judges.get(judge);
//     judges.set(judge, elem ? [...elem, person] : [person]);
//   }
//
//   const judgesWithPersons = Array.from(judges.entries());
//
//   const result = judgesWithPersons.reduce<number[]>((acc, [judge]) => {
//     const found = judgesWithPersons.find(([, persons]) => persons.includes(judge));
//
//     return found ? acc : [...acc, judge];
//   }, []);
//
//   const judgeId = result[0];
//   const judgePersons = judges.get(judgeId);
//
//   return judgePersons?.length === n-1 ? judgeId : -1;
// }

console.log(`test1: \n COUNT: ${test1_count} \n ARRAY: ${test1_array} \n EXPECTED: 2 \n OUTPUT:`, findJudge(test1_count, test1_array));
console.log(`test2: \n COUNT: ${test2_count} \n ARRAY: ${test2_array} \n EXPECTED: 3 \n OUTPUT:`, findJudge(test2_count, test2_array));
console.log(`test3: \n COUNT: ${test3_count} \n ARRAY: ${test3_array} \n EXPECTED: -1 \n OUTPUT:`, findJudge(test3_count, test3_array));
console.log(`test4: \n COUNT: ${test4_count} \n ARRAY: ${test4_array} \n EXPECTED: 3 \n OUTPUT:`, findJudge(test4_count, test4_array));
console.log(`test5: \n COUNT: ${test5_count} \n ARRAY: ${test5_array} \n EXPECTED: -1 \n OUTPUT:`, findJudge(test5_count, test5_array));
console.log(`test6: \n COUNT: ${test6_count} \n ARRAY: ${test6_array} \n EXPECTED: 1 \n OUTPUT:`, findJudge(test6_count, test6_array));

export { findJudge };
