function listOFNames(input) {
  input.sort((a, b) => a.localeCompare(b));
  let num = 1;

  for (let i = 0; i < input.length; i++) {
    console.log(`${num}.` + input[i]);
    num++;
  }
}

listOFNames(["John", "bob", "Christina", "Ema"]);
