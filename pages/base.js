const { expect } = require("@playwright/test");

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url); // Accepting URL as a parameter
    }

    async loginPopup(selector) {
        //making click on cross button of LoginPopUp whenever it appears and disturb test
        const popup = this.page.locator(selector);
        if (await popup.isVisible()) {
            await this.page.click("//div[normalize-space()='×']");
        }
    }
    async click(selector) {
        await this.page.waitForSelector(selector);
        await this.page.click(selector);
    }
    async containTextAssertion(selector, expectedText){
        await this.page.waitUntil(selector);
        const element = await this.page.locator(selector);
        if(!(await element.isVisible())){
            throw new Error(`Element ${selector} is not visible.`);
        }
        await expect(element).toContainText(expectedText);
    }

    async fill(selector, text) {
        await this.page.waitForSelector(selector);
        await this.page.fill(selector, text);
    }

    async type(selector, text, delay = 100) {
        await this.page.waitForSelector(selector);
        await this.page.type(selector, text, { delay });
    }

    async hover(selector) {
        await this.page.waitForSelector(selector);
        await this.page.hover(selector);
    }
    async hoverOut(){
        await this.page.mouse.move(0, 0);

    }

    async getText(selector) {
        await this.page.waitForSelector(selector);
        return await this.page.textContent(selector);
    }

    async verifyElement(selector) {
        await this.page.waitForSelector(selector);
        const element = this.page.locator(selector);
        if (!(await element.isVisible())) {
            throw new Error(`Element ${selector} is not visible.`);
        }
        await expect(element).toBeVisible();
    }
}

module.exports = BasePage;
