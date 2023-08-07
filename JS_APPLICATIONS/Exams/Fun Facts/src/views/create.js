import { html } from "../../node_modules/lit-html/lit-html.js";
import { createFunFact } from "../data/service.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (onCreate) => html` <section id="create">
  <div class="form">
    <h2>Add Fact</h2>
    <form @submit=${onCreate} class="create-form">
      <input type="text" name="category" id="category" placeholder="Category" />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fact</button>
    </form>
  </div>
</section>`;

export function createPage(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onCreate)));

  async function onCreate(data) {
    if (Object.values(data).some((x) => x == "")) {
      return alert("All fields are required");
    }

    await createFunFact(data);

    ctx.page.redirect("/catalog");
  }
}
