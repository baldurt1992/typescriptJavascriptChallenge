function searchSequence(array: number[], target: number): number[][] {
  let sequences: number[][] = [];

  for (let i = 0; i < array.length; i++) {
    let sum = 0;

    let currentSequence: number[] = [];

    for (let j = i; j < array.length; j++) {
      sum += array[j];
      currentSequence.push(array[j]);

      if (sum === target) {
        sequences.push([...currentSequence]);
      }

      if (sum > target) {
        break;
      }
    }
  }

  return sequences;
}

console.log(searchSequence([1, 2, 3, 4, 5], 9));
console.log(searchSequence([1, 2, 3, 4, 5], 5));
console.log(searchSequence([1, 2, 3, 4, 5], 17));
