import { expect, Locator, Page } from "playwright/test";
import { BasePage } from "./page";

export class LoginPage extends BasePage{

    readonly page:Page;
    readonly loginLink: Locator;
    readonly emailInput: Locator;
    readonly passInput: Locator;
    readonly loginBtn: Locator;
    readonly logoutLink: Locator;

    constructor(page:Page){
        super(page)
        this.page = page;
        this.loginLink = this.page.locator('a[href="/login"]');
        this.emailInput = this.page.locator('[data-qa="login-email"]'); 
        this.passInput = this.page.locator('[data-qa="login-password"]')
        this.loginBtn = this.page.locator('[data-qa="login-button"]')
        this.logoutLink = this.page.locator('[href="/logout"]');
    }

    async login(username:string,password:string){
        await this.clickAndWait(this.loginLink);
        await this.page.waitForURL('https://automationexercise.com/login');
        await this.fillText(this.emailInput,username);
        await this.fillText(this.passInput,password);
        await this.clickAndWait(this.loginBtn);
        await this.logoutLink.waitFor({state:"visible"});
        await expect(this.logoutLink).toHaveText('Logout');
    }

}