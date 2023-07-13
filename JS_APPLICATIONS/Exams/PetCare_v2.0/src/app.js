import { page, render } from "./lib.js";

page("/", () => console.log("home"));

page.start();
