function solve(input) {
  let obj = {};

  for (let i = 0; i < input.length; i += 2) {
    let first = input[i];
    let sec = Number(input[i + 1]);
    obj[first] = sec;
  }
  console.log(obj);
}

solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
