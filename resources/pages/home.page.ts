import { Page } from "playwright/test";
import { BasePage } from "./page";

export class HomePage extends BasePage{

readonly page:Page;
readonly addProduct;

constructor(page:Page){
    super(page);
    this.page=page;
    this.addProduct= page.locator('[data-product-id="1"]')
}

async addProductToCart(){
    await this.clickAndWait(this.addProduct);
}

}