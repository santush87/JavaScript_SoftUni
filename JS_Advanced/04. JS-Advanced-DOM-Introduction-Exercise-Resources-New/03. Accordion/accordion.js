function toggle() {
  let buttonChange = document.querySelector(".button ").textContent;
  let text = document.querySelector("#extra");
  switch (buttonChange) {
    case "More":
      buttonChange = "Less";
      text.style.display = "block";
      break;
    case "Less":
      buttonChange = "More";
      text.style.display = "none";
      break;
  }
  document.querySelector(".button ").textContent = buttonChange;
}
