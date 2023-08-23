import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteById, getMoto } from "../data/service.js";
import { getUserData } from "../util.js";

const detailsTemplate = (moto, isOwner, onDelete) => html` <section
  id="details"
>
  <div id="details-wrapper">
    <img id="details-img" src=${moto.imageUrl} alt="example1" />
    <p id="details-title">${moto.model}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p class="year">Year: ${moto.year}</p>
        <p class="mileage">Mileage: ${moto.mileage} km.</p>
        <p class="contact">Contact Number: ${moto.contact}</p>
        <p id="motorcycle-description">${moto.about}</p>
      </div>
      ${isOwner
        ? html`<div id="action-buttons">
            <a href="/edit/${moto._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
              >Delete</a
            >
          </div>`
        : nothing}
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const moto = await getMoto(id);
  const userId = getUserData()?._id;

  const isOwner = userId === moto._ownerId;

  ctx.render(detailsTemplate(moto, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this pet?");

    if (choice) {
      await deleteById(id);
      ctx.page.redirect("/catalog");
    }
  }
}
