import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyBooks } from "../data/services.js";
import { getUserData } from "../util.js";
import { bookPreview } from "./common.js";

const myBooksTemplate = (books) => html` <section
  id="my-books-page"
  class="my-books"
>
  <h1>My Books</h1>
  <ul class="my-books-list">
    ${books.length > 0
      ? books.map(bookPreview)
      : html`<p class="no-books">No books in database!</p>`}
  </ul>
</section>`;

export async function myBooksPage(ctx) {
  const userData = getUserData();
  const id = userData._id;
  const books = await getMyBooks(id);

  ctx.render(myBooksTemplate(books));
}
