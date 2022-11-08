const urlPosts = `http://localhost:3030/jsonstore/blog/posts`;
const urlComments = `http://localhost:3030/jsonstore/blog/comments`;

function attachEvents() {
  document.getElementById(`btnLoadPosts`).addEventListener(`click`, getPost);
  document.getElementById(`btnViewPost`).addEventListener(`click`, getComment);
}

async function getPost() {
  const response = await fetch(urlPosts);
  const data = await response.json();
  const selectOption = document.getElementById(`posts`);
  selectOption.innerHTML = "";

  Object.values(data).forEach((post) => {
    const op = document.createElement(`option`);
    op.value = post.id;
    op.textContent = post.title;
    selectOption.appendChild(op);
  });
}

async function getComment() {
  const currSelection =
    document.getElementById(`posts`).selectedOptions[0].value;
  const titleElement = document.getElementById(`post-title`);
  const postBodyElement = document.getElementById(`post-body`);
  const postUlElements = document.getElementById(`post-comments`);
  //   postUlElements.innerHTML = "";

  const postResponse = await fetch(urlPosts);
  const postData = await postResponse.json();

  const commentResponse = await fetch(urlComments);
  const commentData = await commentResponse.json();

  const selectedPost = Object.values(postData).find(
    (post) => post.id == currSelection
  );

  titleElement.textContent = selectedPost.title;
  postBodyElement.textContent = selectedPost.body;

  const comments = Object.values(commentData).filter(
    (c) => c.postId === currSelection
  );

  comments.forEach((c) => {
    const li = document.createElement(`li`);
    li.textContent = c.text;
    postUlElements.appendChild(li);
  });
}

attachEvents();
