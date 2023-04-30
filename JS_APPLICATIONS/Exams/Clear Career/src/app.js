import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "./util.js";
import { layoutTemplate } from "./views/layout.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./data/auth.js";
import { catalogPage } from "./views/catalog.js";

import * as api from "./data/offers.js";
window.api = api;

// TODO change render root depending on project HTML structure
const root = document.body;

page(decorateContext)
page('index.html', '/');
page('/', homePage);``
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);

page.start();

function decorateContext(ctx, next){
    ctx.render = renderView;

    next();
}

// TODO Inject dependencies
function renderView(context){
    const userData = getUserData();
    render(layoutTemplate(userData, context), root)
}

function logoutAction(ctx){
    logout();
    ctx.page.redirect('/');
}