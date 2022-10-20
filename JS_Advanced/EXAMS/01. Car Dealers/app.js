window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish").addEventListener("click", makePublication);

  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let fuel = document.getElementById("fuel");
  let originalCost = document.getElementById("original-cost");
  let sellingPrice = document.getElementById("selling-price");

  let tbody = document.getElementById("table-body");

  function makePublication(e) {
    e.preventDefault();

    if (
      !make.value ||
      !model.value ||
      !year.value ||
      !fuel.value ||
      !originalCost.value ||
      !sellingPrice.value ||
      originalCost.value >= sellingPrice.value
    ) {
      return;
    }

    let tr = document.createElement("tr");
    tr.classList.add("row");

    let td1 = document.createElement("td");
    td1.textContent = make.value;

    let td2 = document.createElement("td");
    td2.textContent = model.value;

    let td3 = document.createElement("td");
    td3.textContent = year.value;

    let td4 = document.createElement("td");
    td4.textContent = fuel.value;

    let td5 = document.createElement("td");
    td5.textContent = originalCost.value;

    let td6 = document.createElement("td");
    td6.textContent = sellingPrice.value;

    let td7 = document.createElement("td");

    let btnEdit = document.createElement("button");
    btnEdit.classList.add("action-btn", "edit");
    btnEdit.textContent = "Edit";
    btnEdit.addEventListener("click", editTheThing);

    let btnSell = document.createElement("button");
    btnSell.classList.add("action-btn", "sell");
    btnSell.textContent = "Sell";

    td7.appendChild(btnEdit);
    td7.appendChild(btnSell);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    tbody.appendChild(tr);

    make.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    originalCost.value = "";
    sellingPrice.value = "";
  }

  function editTheThing(e) {
    let elem = e.target.parentNode.parentNode.querySelectorAll("td");
    console.log(elem);
    make.value = elem[0].textContent;
    model.value = elem[1].textContent;
    year.value = elem[2].textContent;
    fuel.value = elem[3].textContent;
    originalCost.value = elem[4].textContent;
    sellingPrice.value = elem[5].textContent;

    let toRemove = document.getElementsByClassName("row")[0];
    e.target.parentNode.parentNode.remove();
  }
}
