import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllMotos } from "../data/service.js";

const catalogTemplate = (allMoto) => html`
  <h2>Available Motorcycles</h2>
  <section id="dashboard">
    ${allMoto.length > 0
      ? allMoto.map(motoTemplate)
      : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
  </section>
`;

const motoTemplate = (moto) => html` <div class="motorcycle">
  <img src=${moto.imageUrl} alt="example1" />
  <h3 class="model">${moto.model}</h3>
  <p class="year">Year: ${moto.year}</p>
  <p class="mileage">Mileage: ${moto.mileage} km.</p>
  <p class="contact">Contact Number: ${moto.contact}</p>
  <a class="details-btn" href="/details/${moto._id}">More Info</a>
</div>`;

export async function catalogPage(ctx) {
  const allMoto = await getAllMotos();
  ctx.render(catalogTemplate(allMoto));
}
