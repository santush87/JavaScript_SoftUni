"use strict";

const { chromium } = require("playwright-chromium");
const { expect } = require("chai");

let browser, page; // Declare reusable variables

describe("E2E tests", async function () {
  this.timeout(5000);
  before(async () => {
    browser = await chromium.launch();
  });
  after(async () => {
    await browser.close();
  });
  beforeEach(async () => {
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.close();
  });

  it("lodas article titles", async () => {
    await page.goto("http://127.0.0.1:5500/JS_APPLICATIONS/11.%20Architecture%20and%20Testing/01.%20Accordion/");
    // await page.screenshot({ path: "page.png" });
    await page.waitForSelector(".accordion div.head>span");

    const content = await page.textContent("#main");

    expect(content).to.contain("Scalable Vector Graphics");
    expect(content).to.contain("Open standard");
    expect(content).to.contain("Unix");
    expect(content).to.contain("ALGOL");
  });

  it("has Working More button", async () => {
    await page.goto("http://127.0.0.1:5500/JS_APPLICATIONS/11.%20Architecture%20and%20Testing/01.%20Accordion/");

    await page.click("text=More");

    await page.waitForSelector(".extra p");

    const text = await page.textContent(".extra p");
    const visible = await page.isVisible(".extra p");

    expect(text).to.contain("Scalable Vector Graphics (SVG)");
    expect(visible).to.be.true;
  });
});
