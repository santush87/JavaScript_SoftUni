function rotate(input, num) {
  let numRotate = Number(num);

  for (let i = 0; i < numRotate; i++) {
    const element = input.pop();
    input.unshift(element);
  }
  console.log(input.join(` `));
}

rotate(["Banana", "Orange", "Coconut", "Apple"], 15);
