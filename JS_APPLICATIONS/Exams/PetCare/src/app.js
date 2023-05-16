import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "./util.js";
import { layoutTemplate } from "./views/layout.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./data/auth.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";

const root = document.getElementById("content");

page(decorateContext)
// page('index.html', '/');
page('/', homePage);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/login', loginPage);
page('/register', registerPage);
page('/create', showCreate);
page('/logout', logoutAction);

page.start();

function decorateContext(ctx, next){
    ctx.render = renderView;

    next();
}

function renderView(context){
    const userData = getUserData();
    render(layoutTemplate(userData, context), root)
}

function logoutAction(ctx){
    logout();
    ctx.page.redirect('/');
}