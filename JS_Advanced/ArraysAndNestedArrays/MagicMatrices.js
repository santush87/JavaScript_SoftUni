function magicMatrices(input) {
  let sum = input[0].reduce((a, b) => a + b);

  for (let row = 0; row < input[0].length; row++) {
    let currColSum = 0;
    for (let column = 0; column < input.length; column++) {
      const elementCol = Number(input[row][column]);
      currColSum += elementCol;
    }
    if (sum !== currColSum) {
      return false;
    }
  }
  return true;
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
