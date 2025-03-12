import {expect, test} from "@playwright/test";
import HomePage from "../pages/homePage"

test.describe("Test Cases of Home Page - GamesSutra", ()=>{
    test("Ensure the homepage loads completely without errors.", async ({page}) =>{
        const homePage = new HomePage(page);
        await homePage.navigate("https://gemsmantra.com/");
        await homePage.verifyLogo();
    })
})