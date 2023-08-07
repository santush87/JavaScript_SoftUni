import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteByBookId, getByBookId } from "../data/services.js";
import { getUserData } from "../util.js";

const detailsTemplate = (book, isOwner, hasUser, onDelete) => html` <section
  id="details-page"
  class="details"
>
  <div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl} /></p>
    <div class="actions">
      ${isOwner
        ? html`<a class="button" href="/edit">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)"
              >Delete</a
            >`
        : nothing}

      <!-- Bonus -->
      <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
      ${hasUser && !isOwner ? html`<a class="button" href="#">Like</a>` : nothing}
      

      <!-- ( for Guests and Users )  -->
      <div class="likes">
        <img class="hearts" src="/images/heart.png" />
        <span id="total-likes">Likes: 0</span>
      </div>
      <!-- Bonus -->
    </div>
  </div>
  <div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const bookId = ctx.params.id;
  const book = await getByBookId(bookId);
  const hasUser = getUserData();
  const userId = getUserData()?._id;

  const isOwner = book._ownerId === userId;

  ctx.render(detailsTemplate(book, isOwner, hasUser, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this book?");

    if (choice) {
      await deleteByBookId(bookId);
      ctx.page.redirect("/");
    }
  }
}
