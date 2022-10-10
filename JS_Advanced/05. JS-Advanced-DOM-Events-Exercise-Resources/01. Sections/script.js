function create(words) {
  let domTree = document.getElementById("content");

  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    let theDiv = document.createElement("div");
    let thePar = document.createElement("p");
    thePar.textContent = element;
    thePar.style.display = "none";

    theDiv.appendChild(thePar);
    theDiv.addEventListener("click", shower);
    domTree.appendChild(theDiv);
  }

  function shower(e) {
    let p = e.target.children[0];
    p.style.display = "block";
  }
}
