import page from "../node_modules/page/page.mjs"

page("/index.html", "/")
page("/", views[() => console.log("<h2>Home Page</h2>")])
page("/catalog", views[() => console.log("<h2>Catalog</h2>")])
page("/about", views[() => console.log("<h2>About</h2>")])

page.start()
