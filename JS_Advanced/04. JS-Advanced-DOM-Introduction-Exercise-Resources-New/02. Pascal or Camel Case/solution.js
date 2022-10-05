function solve() {
  let input = document.getElementById("text").value.toLowerCase().split(" ");

  let command = document.getElementById("naming-convention").value;
  let result = "";

  switch (command) {
    case "Camel Case":
      result += input[0];
      for (let i = 1; i < input.length; i++) {
        let word = input[i].charAt(0).toUpperCase() + input[i].slice(1);
        result += word;
      }

      break;
    case "Pascal Case":
      for (let i = 0; i < input.length; i++) {
        let word = input[i].charAt(0).toUpperCase() + input[i].slice(1);
        result += word;
      }
      break;
    default:
      result = "Error!";
      break;
  }
  document.getElementById("result").textContent = result;
}
