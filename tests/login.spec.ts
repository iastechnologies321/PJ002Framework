import test, { expect } from "playwright/test";
import { LoginPage } from "../resources/pages/login.page";
import { HomePage } from "../resources/pages/home.page";

let loginpage:LoginPage;
let homePage:HomePage

test.beforeEach(async({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();
    loginpage = new LoginPage(page);
    homePage = new HomePage(page);
})

test('End To End', async({page}) => { 
    await page.goto('/');
    await loginpage.login('iastechnologies321@gmail.com','iastechnologies321');
    await homePage.addProductToCart();
 })