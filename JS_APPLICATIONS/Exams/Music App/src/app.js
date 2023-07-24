import { getUserData } from "./api/util.js";
import { page, render } from "./lib.js";
import { showCatalog } from "./views/catalogView.js";
import { showCreate } from "./views/createView.js";
import { showHome } from "./views/homeView.js";
import { showLogin } from "./views/loginView.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/registerView.js";

// Get main element for renderer
const main = document.getElementById("main-content");

// Attached middle ware
page(decorateContext);

//Page routing
page("/", showHome);
page("/home", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/catalog", showCatalog);
page("/create", showCreate);
page("/details/:id", () => console.log("details"));
page("/edit/:id", () => console.log("edit"));
page("/search", () => console.log("search"));

updateNav();
page.start();

function decorateContext(ctx, next){
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if (user) {
        ctx.user = user;
    }

    next();
}

function renderMain(content){
    render(content, main);
}
