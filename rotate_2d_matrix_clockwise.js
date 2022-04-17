/*
  Task: Rotate a 2D matrix clockwise
  Input:
    const input = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ];
  Output:
    const output = [
      [6, 3, 0],
      [7, 4, 1],
      [8, 5, 2],
    ];
*/
const input = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

/*
  Solution: Using matrix transpose (flipping x and y coordinates) and then reversing each item
  ref: (Transpose of a matrix) https://en.wikipedia.org/wiki/Transpose
*/
const rotateMatrixClockwise = (matrix) => {
  for (r = 0; r < matrix.length; r++) {
    for (let c = 0; c < r; c++) {
      const temp = matrix[r][c];
      matrix[r][c] = matrix[c][r];
      matrix[c][r] = temp;
    }
  }

  const finalMatrix = matrix.map((row) => row.reverse());
  return finalMatrix;
};

const output = rotateMatrixClockwise(input);
console.log(output);
