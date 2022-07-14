function sameNumsAndSum(input) {
  let inputNumber = input.toString();
  let isTrue = true;
  let sum = 0;
  let firstNum = Number(inputNumber[0]);
  let theLenght = inputNumber.length;

  for (let index = 0; index < theLenght; index++) {
    let currNum = Number(inputNumber[index]);
    sum += currNum;
    if (firstNum !== currNum) {
      isTrue = false;
    }
  }
  console.log(isTrue);
  console.log(sum);
}

sameNumsAndSum(1234);
