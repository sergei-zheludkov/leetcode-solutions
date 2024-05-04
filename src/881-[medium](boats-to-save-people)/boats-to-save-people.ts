export const numRescueBoats = (people: number[], limit: number): number => {
  people.sort((a, b) => a - b);

  let count = 0;
  let l = 0, r = people.length - 1;

  while (people[r] === limit) {
    count++;
    r--;
  }

  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      l++;
      r--;
    } else {
      r--;
    }
    count++;
  }

  return count;
};
