import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import {
  deleteById,
  getAllLikes,
  getFactById,
  getMyLikes,
  likeFact,
} from "../data/service.js";
import { getUserData } from "../util.js";

const detailsTemplate = (
  fact,
  isOwner,
  showLikeButton,
  likes,
  onLike,
  onDelete
) => html` <section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${fact.imageUrl} alt="example1" />
    <p id="details-category">${fact.category}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p id="description">${fact.description}</p>
        <p id="more-info">${fact.moreInfo}</p>
      </div>

      <h3>Likes:<span id="likes">${likes}</span></h3>

      <div id="action-buttons">
        ${isOwner
          ? html`<a href="" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >`
          : nothing}
        ${showLikeButton
          ? html`<a @click=${onLike} href="javascript:void(0)" id="like-btn"
              >Like</a
            >`
          : nothing}
      </div>
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const factId = ctx.params.id;
  const fact = await getFactById(factId);
  const userId = getUserData()?._id;
  const likes = await getAllLikes(factId);
  const myLikes = await getMyLikes(factId, userId);
  const isOwner = userId == fact._ownerId;

  const showLikeButton = !isOwner && myLikes == 0 && userId;

  ctx.render(
    detailsTemplate(fact, isOwner, showLikeButton, likes, onLike, onDelete)
  );

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this pet?");

    if (choice) {
      await deleteById(factId);
      ctx.page.redirect("/catalog");
    }
  }

  async function onLike() {
    await likeFact(factId);
    likes++;
    myLikes++;
    ctx.page.redirect("/catalog/" + factId);
  }
}
