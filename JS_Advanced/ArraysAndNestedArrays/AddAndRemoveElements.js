function addAndRemove(input) {
  let arrResult = [];
  let num = 1;

  for (let i = 0; i < input.length; i++) {
    let command = input[i];
    if (command === `add`) {
      arrResult.push(num);
    } else if (command === `remove`) {
      arrResult.pop();
    }
    num++;
  }
  if (arrResult.length === 0) {
    console.log(`Empty`);
  } else {
    for (let i = 0; i < arrResult.length; i++) {
      console.log(arrResult[i]);
    }
  }
}

addAndRemove(["add", "add", "remove", "add", "add"]);
