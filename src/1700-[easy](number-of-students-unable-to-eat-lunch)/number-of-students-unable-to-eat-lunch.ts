export const countStudents = (students: number[], sandwiches: number[]): number => {
  let circle = students.length;

  while (circle) {
    if (students[0] === sandwiches[0]) {
      students.splice(0, 1);
      sandwiches.splice(0, 1);
      circle = students.length;
    } else  {
      const [first] = students.splice(0, 1);
      students.push(first);
      circle -= 1;
    }
  }

  return students.length;
};
