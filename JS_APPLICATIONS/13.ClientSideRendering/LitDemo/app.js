import { html, render } from "https://unpkg.com/lit-html?module";

// const name = "World";
// const p = html`<p>Hello, ${name}!</p>`;
// console.log(p);

// function createP(name) {
//   return html`<p>Hello, ${name}!</p>`;
// }
// render(createP("Martin"), document.querySelector("nav"));
// render(createP("World"), document.querySelector("main"));

const p = (name) => html`<p>Hello, ${name}!</p>`;

render(p("Martin"), document.querySelector("nav"));
render(p("World"), document.querySelector("main"));
