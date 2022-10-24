window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish-btn").addEventListener("click", publish);
  let title = document.getElementById("post-title");
  let category = document.getElementById("post-category");
  let content = document.getElementById("post-content");
  let reviewUl = document.getElementById("review-list");
  let publishUl = document.getElementById("published-list");
  let clearAll = document.getElementById("clear-btn");
  clearAll.addEventListener("click", justClear);

  function publish() {
    if (!title.value || !category.value || !content.value) {
      return;
    }

    let li = document.createElement("li");
    li.classList.add("rpost");
    reviewUl.appendChild(li);

    let article = document.createElement("article");
    li.appendChild(article);

    let h4 = document.createElement("h4");
    h4.textContent = title.value;
    article.appendChild(h4);

    let p = document.createElement("p");
    p.textContent = category.value;
    article.appendChild(p);

    let p1 = document.createElement("p");
    p1.textContent = content.value;
    article.appendChild(p1);

    title.value = "";
    category.value = "";
    content.value = "";

    let btnEdit = document.createElement("button");
    btnEdit.classList.add("action-btn", "edit");
    btnEdit.textContent = "Edit";
    li.appendChild(btnEdit);
    btnEdit.addEventListener("click", edit);

    let btnApprove = document.createElement("button");
    btnApprove.classList.add("action-btn", "approve");
    btnApprove.textContent = "Approve";
    li.appendChild(btnApprove);
    btnApprove.addEventListener("click", approve);
  }

  function edit(e) {
    let theChildren = e.target.parentNode.querySelector("article").children;
    title.value = theChildren[0].textContent;
    category.value = theChildren[1].textContent;
    content.value = theChildren[2].textContent;
    e.target.parentNode.parentNode.querySelector("li").remove();
  }

  function approve(e) {
    publishUl.appendChild(e.target.parentNode.parentNode.querySelector("li"));
    let bnts = e.target.parentNode.querySelectorAll("button");
    bnts[0].remove();
    bnts[1].remove();
  }

  function justClear(e) {
    e.target.parentNode.querySelector("li").remove();
  }
}
