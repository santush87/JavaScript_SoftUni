import { html } from "../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (userData, content) => html`
  <header id="site-header">
    <!-- Navigation -->
    <nav class="navbar">
      <section class="navbar-dashboard">
        <a href="#">Dashboard</a>
        ${!userData
          ? html`<div id="guest">
              <a class="button" href="#">Login</a>
              <a class="button" href="#">Register</a>
            </div>`
          : html`<div id="user">
              <span>Welcome, {email}</span>
              <a class="button" href="#">My Books</a>
              <a class="button" href="#">Add Book</a>
              <a class="button" href="#">Logout</a>
            </div>`}
      </section>
    </nav>
  </header>
  <main>${content}</main>
`;
