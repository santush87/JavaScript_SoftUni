import { html } from "../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (userData, content) => html`
  <header id="site-header">
    <!-- Navigation -->
    <nav class="navbar">
      <section class="navbar-dashboard">
        <a href="/">Dashboard</a>
        ${!userData
          ? html`<div id="guest">
              <a class="button" href="/login">Login</a>
              <a class="button" href="/register">Register</a>
            </div>`
          : html`<div id="user">
              <span>Welcome, ${userData.email}</span>
              <a class="button" href="/mybooks">My Books</a>
              <a class="button" href="/addbook">Add Book</a>
              <a class="button" href="javascript:void(0)">Logout</a>
            </div>`}
      </section>
    </nav>
  </header>
  <main id="site-content">${content}</main>
`;
