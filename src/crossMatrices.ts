function crossMatrices(A: number[][], B: number[][]): string[][] {
  let result: string[][] = [];

  for (let i = 0; i < A.length; i++) {
    let rowResult: string[] = [];

    for (let j = 0; j < A[i].length; j++) {
      let a = A[i][j];
      let b = B[i][j];

      if (a % 2 !== 0 && b % 2 === 0) {
        rowResult.push("X");
      } else if ((a % 2 !== 0 && b % 2 !== 0) || (a % 2 === 0 && b % 2 === 0)) {
        rowResult.push("O");
      } else {
        rowResult.push("-");
      }
    }

    result.push(rowResult);
  }

  return result;
}

let A = [
  [1, 2],
  [3, 4],
];
let B = [
  [2, 3],
  [4, 5],
];
console.log(crossMatrices(A, B));
