window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("form-btn");
  publishBtn.addEventListener("click", publish);
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let title = document.getElementById("story-title");
  let genre = document.getElementById("genre");
  let story = document.getElementById("story");
  let previewUl = document.getElementById("preview-list");

  function publish() {
    if (
      !firstName.value ||
      !lastName.value ||
      !age.value ||
      !title.value ||
      !genre.value ||
      !story.value
    ) {
      return;
    }

    let li = document.createElement("li");
    li.classList.add("story-info");
    previewUl.appendChild(li);

    let article = document.createElement("article");
    li.appendChild(article);

    let h4 = document.createElement("h4");
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
    article.appendChild(h4);

    let p1 = document.createElement("p");
    p1.textContent = `Age: ${age.value}`;
    article.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = `Title: ${title.value}`;
    article.appendChild(p2);

    let p3 = document.createElement("p");
    p3.textContent = `Genre: ${genre.value}`;
    article.appendChild(p3);

    let p4 = document.createElement("p");
    p4.textContent = story.value;
    article.appendChild(p4);

    let btnSave = document.createElement("button");
    btnSave.classList.add("save-btn");
    btnSave.textContent = "Save Story";
    li.appendChild(btnSave);
    btnSave.disabled = false;
    btnSave.addEventListener("click", saveStory);

    let btnEdit = document.createElement("button");
    btnEdit.classList.add("edit-btn");
    btnEdit.textContent = "Edit Story";
    li.appendChild(btnEdit);
    btnEdit.disabled = false;
    btnEdit.addEventListener("click", editStory);

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("delete-btn");
    btnDelete.textContent = "Delete Story";
    li.appendChild(btnDelete);
    btnDelete.disabled = false;
    btnDelete.addEventListener("click", deleteStory);

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    title.value = "";
    genre.value = "";
    story.value = "";

    publishBtn.disabled = true;
  }

  function editStory(e) {
    let toInput = Array.from(
      e.target.parentNode.querySelector("article").children
    );
    firstName.value = toInput[0].textContent.split(" ")[1];
    lastName.value = toInput[0].textContent.split(" ")[2];
    age.value = toInput[1].textContent.split(": ")[1];
    title.value = toInput[2].textContent.split(": ")[1];
    genre.value = toInput[3].textContent.split(": ")[1];
    story.value = toInput[4].textContent;

    e.target.parentNode.querySelector("article").remove();

    let bnts = e.target.parentNode.querySelectorAll("button");
    bnts[0].remove();
    bnts[1].remove();
    bnts[2].remove();

    publishBtn.disabled = false;
  }

  function saveStory(e) {
    let body = document.getElementsByClassName("body")[0];
    document.getElementById("main").remove();
    let div = document.createElement("div");
    div.setAttribute("id", "main");
    body.appendChild(div);
    let h1 = document.createElement("h1");
    h1.textContent = "Your scary story is saved!";
    body.appendChild(h1);
  }

  function deleteStory(e) {
    e.target.parentNode.querySelector("article").remove();

    let bnts = e.target.parentNode.querySelectorAll("button");
    bnts[0].remove();
    bnts[1].remove();
    bnts[2].remove();

    publishBtn.disabled = false;
  }
}
