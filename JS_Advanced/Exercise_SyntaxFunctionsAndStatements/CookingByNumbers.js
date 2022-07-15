function cooking(inputNum, p1, p2, p3, p4, p5) {
  let num = Number(inputNum);
  let arrInput = [p1, p2, p3, p4, p5];

  for (let index = 0; index < arrInput.length; index++) {
    const element = arrInput[index];
    switch (element) {
      case `chop`:
        num /= 2;
        break;
      case `dice`:
        num = Math.sqrt(num);
        break;
      case `spice`:
        num += 1;
        break;
      case `bake`:
        num *= 3;
        break;
      case `fillet`:
        num *= 0.8;
        break;
    }
    console.log(num);
  }
  console.log(arrInput);
}

cooking("9", "dice", "spice", "chop", "bake", "fillet");
