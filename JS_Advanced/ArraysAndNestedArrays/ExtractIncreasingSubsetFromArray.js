function extractIncreasing(input) {
  let arrResult = [];
  let currNum = Number(input[0]);
  arrResult.push(currNum);

  for (let i = 1; i < input.length; i++) {
    const element = Number(input[i]);
    if (currNum <= element) {
      arrResult.push(element);
      currNum = element;
    }
  }

  return arrResult;
}

extractIncreasing([20, 3, 2, 15, 6, 1]);
