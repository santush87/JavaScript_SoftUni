function attachEventsListeners() {
  let btn = Array.from(document.querySelectorAll("input[type=button]"));

  for (let button of btn) {
    button.addEventListener("click", calc);
  }

  function calc(e) {}
}
