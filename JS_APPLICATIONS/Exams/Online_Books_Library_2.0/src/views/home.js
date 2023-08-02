import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllBooks } from "../data/services.js";
import { bookPreview } from "./common.js";

const homeTemplate = (books) => html` <section
  id="dashboard-page"
  class="dashboard"
>
  <h1>Dashboard</h1>
  <ul class="other-books-list">
    ${books.length > 0
      ? books.map(bookPreview)
      : html`<p class="no-books">No books in database!</p>`}
  </ul>
</section>`;



export async function homePage(ctx) {
  const books = await getAllBooks();
  

  ctx.render(homeTemplate(books));
}
