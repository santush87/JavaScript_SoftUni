import { getUserData } from "./api/util.js";
import { page, render } from "./lib.js";
import { showHome } from "./views/home.js";
import { updateNav } from "./views/nav.js";

// Get main element for renderer
const main = document.getElementById("main-content");

// Attached middle ware
page(decorateContext);

//Page routing
page("/", showHome);
page("/catalog", () => console.log("catalog"));
page("/catalog/:id", () => console.log("details"));
page("/edit/:id", () => console.log("edit"));
page("/create", () => console.log("create"));
page("/login", () => console.log("login"));
page("/register", () => console.log("register"));

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
