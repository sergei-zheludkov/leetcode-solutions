export const timeRequiredToBuy = (tickets: number[], k: number): number => {
  let time = tickets.length * tickets[k];

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i] - tickets[k] < 0) {
      time += tickets[i] - tickets[k];
    } else if (i > k) {
      time -= 1;
    }
  }

  return time;
};
