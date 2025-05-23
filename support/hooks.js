import { Before, After } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";



Before(async function () {
     this.browser = await chromium.launch({ headless: false });
     this.context = await this.browser.newContext();
    this.page = await this.context.newPage();  
});

After(async function () {
    await this.page.close();
    await this.browser.close();
});

export {Before,After};
