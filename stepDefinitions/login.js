import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import LoginPage from "../pages/loginpage.js";
import * as fs from "fs";
import "../support/hooks.js";


const testData = JSON.parse(fs.readFileSync("./support/testData.json", "utf-8"));

setDefaultTimeout(120 * 1000);

testData.forEach((user, index) => {
    Given(`user should navigate to the URL - Test ${index + 1}`, async function () {
        this.loginPage = new LoginPage(this.page); 
        console.log(user.base_url);
        await this.loginPage.navigateToLoginPage(user.base_url);
       
    });

    When(`user should enter the username - Test ${index + 1}`, async function () {
        console.log(user.username);
        await this.loginPage.enterUsername(user.username);
    });

    When(`user should enter the password - Test ${index + 1}`, async function () {
        console.log(user.password);
        await this.loginPage.enterPassword(user.password);
    });

    When(`user should click on login button - Test ${index + 1}`, async function () {
        await this.loginPage.clickLoginButton();
    });

    Then(`user should be navigated to the home page - Test ${index + 1}`, async function () {
        try {
            const message = await this.page.locator("div[id='flash'] b").textContent();
            console.log(message);
            const isTextPresent = await this.loginPage.validateText('div[id="flash"] b', "You logged into a secure area!");
            
            if (user.username === "Pavithra" || user.password === "Pavan") {
                console.log(`Intentional Failure for User: ${user.username}`);
            }
            
            expect(isTextPresent).toBe(true);



            console.log(`Test ${index + 1}: User logged in successfully - ${message}`);
        } catch (error) {
            const getErrorMessage = await this.page.locator("div[id='flash'] b").textContent();
            console.log(`Test ${index + 1}: Login Failed - ${getErrorMessage}`);
            fs.appendFileSync("failed-tests.txt", `"${this.testCase.sourceLocation.uri}:${this.testCase.sourceLocation.line}"\n`);

        }
    });
});
