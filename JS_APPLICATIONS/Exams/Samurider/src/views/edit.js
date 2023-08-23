import { html } from "../../node_modules/lit-html/lit-html.js";
import { editMoto, getMoto } from "../data/service.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (moto, onSubmit) => html`<section id="edit">
  <h2>Edit Motorcycle</h2>
  <div class="form">
    <h2>Edit Motorcycle</h2>
    <form @submit=${onSubmit} class="edit-form">
      <input
        type="text"
        name="model"
        id="model"
        placeholder="Model"
        .value=${moto.model}
      />
      <input
        type="text"
        name="imageUrl"
        id="moto-image"
        placeholder="Moto Image"
        .value=${moto.imageUrl}
      />
      <input
        type="number"
        name="year"
        id="year"
        placeholder="Year"
        .value=${moto.year}
      />
      <input
        type="number"
        name="mileage"
        id="mileage"
        placeholder="mileage"
        .value=${moto.mileage}
      />
      <input
        type="number"
        name="contact"
        id="contact"
        placeholder="contact"
        .value=${moto.contact}
      />
      <textarea id="about" name="about" placeholder="about" rows="10" cols="50">
${moto.about}</textarea
      >
      <button type="submit">Edit Motorcycle</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const moto = await getMoto(id);

  ctx.render(editTemplate(moto, createSubmitHandler(onEdit)));

  async function onEdit({ model, imageUrl, year, mileage, contact, about }) {
    if (!model || !imageUrl || !year || !mileage || !contact || !about) {
      return alert("All fields are required");
    }

    await editMoto(id, {
      model,
      imageUrl,
      year,
      mileage,
      contact,
      about,
    });

    ctx.page.redirect("/details/" + id);
  }
}
