import { Locator, Page } from "playwright/test";


export class BasePage{

readonly page:Page

    constructor(page:Page){
        this.page = page;
    }

    async fillText(selector:Locator,value:string){
        await selector.fill(value)
    }

    async clickAndWait(selector:Locator){
        await selector.click();
        await this.page.waitForLoadState('load')
    }
}