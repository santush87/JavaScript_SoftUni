function sortNums(input) {
  let arrResult = [];
  let size = input.length;
  input.sort((a, b) => a - b);

  while (input.length !== 0) {
    let first = input.shift();
    if (first !== `undefined`) {
      arrResult.push(first);
    }
    let second = input.pop();
    if (second !== `undefined`) {
      arrResult.push(second);
    }
  }
  return arrResult;
}

sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
