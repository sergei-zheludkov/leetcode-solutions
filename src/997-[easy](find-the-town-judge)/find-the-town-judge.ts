export const findJudge = (n: number, trust: number[][]): number => {
  const countArray: number[] = new Array(n + 1).fill(0);

  for (const [person, judge] of trust) {
    countArray[person]--;
    countArray[judge]++;
  }

  return countArray.lastIndexOf(n - 1);
};


// export const findJudge = (n: number, trust: number[][]): number => {
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

// export const findJudge = (n: number, trust: number[][]): number => {
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
