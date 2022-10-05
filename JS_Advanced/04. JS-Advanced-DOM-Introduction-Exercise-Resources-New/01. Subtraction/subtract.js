function subtract() {
  let first = Number(document.getElementById("firstNumber").value);
  let sec = Number(document.getElementById("secondNumber").value);

  let res = first - sec;
  document.getElementById("result").textContent = res;
}
