function search() {
  let towns = Array.from(document.querySelectorAll("#towns li"));
  let userWord = document.getElementById("searchText").value;
  let count = 0;
  for (let town of towns) {
    if (town.textContent.includes(userWord)) {
      count++;
      town.style.textDecoration = "underline";
      town.style.fontWeight = "bold";
    } else {
      town.style.textDecoration = "none";
      town.style.fontWeight = "normal";
    }
  }
  document.getElementById("result").innerText = `${count} matches found`;
}
