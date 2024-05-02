export function* fibGenerator(): Generator<number, never, number> {
  let value1 = 0;
  let value2 = 1;

  yield value1;
  yield value2;

  while (true) {
    const next = value1 + value2;
    value1 = value2;
    value2 = next;

    yield next;
  }
}

// export function* fibGenerator(): Generator<number, any, number> {
//   const values = [0, 1];
//   yield values[0];
//   yield values[1];
//
//   while (true) {
//     values.push(values[values.length-2] + values[values.length-1]);
//     yield values[values.length - 1];
//   }
// }
