import { html } from "../../node_modules/lit-html/lit-html.js";
import { getSearch } from "../data/service.js";

const motoTemplate = (moto) => html`<div class="motorcycle">
  <img src=${moto.imageUrl} alt="example1" />
  <h3 class="model">${moto.model}</h3>
  <a class="details-btn" href="">More Info</a>
</div> `;

const searchTemplate = (motoList, ctx) => html`
  <section id="search">
    <div class="form">
      <h4>Search</h4>
      <form @submit=${(e) => onSearch(e, ctx)} class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4 id="result-heading">Results:</h4>
    <div class="search-result">
      ${motoList.length > 0
        ? motoList.map(motoTemplate)
        : html`<h2 class="no-avaliable">No result.</h2>`}
    </div>
  </section>
`;

async function onSearch(event, ctx) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const query = formData.get("search").trim();

  ctx.page.redirect(`/search?query=${query}`);
}

export async function searchPage(ctx) {
//   const userId = getUserData()?._id;

  const brand = ctx.querystring.split("=")[1];
  const motoList = brand == undefined ? [] : await getSearch(brand);
  ctx.render(searchTemplate(motoList, ctx));
}
