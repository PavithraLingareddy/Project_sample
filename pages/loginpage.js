//import { url } from "inspector";

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.loginButton = 'button[type="submit"]';
        this.getSuccessMessage = "div[id='flash'] b";
        this.getErrorMessage = "";
    }

    async navigateToLoginPage(url) {
        await this.page.goto(url);
        await this.page.waitForTimeout(5000);
    }

    async enterUsername(username) {
        await this.page.fill(this.usernameInput, username);
    }

    async enterPassword(password) {
        await this.page.fill(this.passwordInput, password);
    }

    async clickLoginButton() {
        await this.page.click(this.loginButton);
    }

    async validateText(selector, expectedText) {
       

            const actualText = await this.page.locator(selector).textContent();
            return actualText.includes(expectedText);
        
    }
}



export default LoginPage;
