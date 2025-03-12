const BasePage = require("./base");

class HomePage extends BasePage {
    constructor(page) {
        super(page);
    }

    get brandLogo() { return "//img[@class='header__logo-image']"; }
    get popupLogin() { return "//body/div[@class='qr-optin-pop']/div[1]"; }
    get profileButton() { return "//a[@title='Account']//*[name()='svg']"; }
    get searchButton() { return "//a[@href='/search']//*[name()='svg']"; }
    get cartButton() { return "//a[@href='/cart']//*[name()='svg']"; }
    get rudrakshCheckNowButton() { return "//button[normalize-space()='Check Now!']"; }
    get rudrakshOrderReportBuyButton() { return "//button[normalize-space()='Buy Now!']"; }
    get productRangeSectionHeadLine() { return "//p[normalize-space()='Product range']"; }
    get gemStoneCollectionCard() { return "//div[contains(@class,'collection-list collection-list--text-outside wrap')]//a[contains(@class,'is-selected group')]"; }
    get rudrakshCollectionCard() { return "(//a[contains(@class,'group')])[6]"; }
    get jewelleryCollectionCard() { return "//a[contains(@href,'/collections/jewelry')]"; }
    get stonesAndTreesCollectionCard() { return "(//a[contains(@class,'group')])[8]"; }


    async closingLoginPopup() {
        await this.closePopup(this.popupLogin);
    }

    async verifyElementExists(element) {
        await this.verifyElement(element);
    }

    async verifyLogo() { await this.verifyElementExists(this.brandLogo); }
    async verifyProfileButton() { await this.verifyElementExists(this.profileButton); }
    async verifySearchButton() { await this.verifyElementExists(this.searchButton); }
    async verifyCartButton() { await this.verifyElementExists(this.cartButton); }
    async verifyRudrakshCheckNowButton() { await this.verifyElementExists(this.rudrakshCheckNowButton); }
    async verifyRudrakshOrderReportBuyButton() { await this.verifyElementExists(this.rudrakshOrderReportBuyButton); }
    async verifyProductRangeSectionHeadLine() { await this.verifyElementExists(this.productRangeSectionHeadLine); }
    async verifyGemStoneCollectionCard() { await this.verifyElementExists(this.gemStoneCollectionCard); }
    async verifyRudrakshCollectionCard() { await this.verifyElementExists(this.rudrakshCollectionCard); }
    async verifyJewelleryCollectionCard() { await this.verifyElementExists(this.jewelleryCollectionCard); }
    async verifyStonesAndTreesCollectionCard() { await this.verifyElementExists(this.stonesAndTreesCollectionCard); }


    async verifyHomePageContent() {
        await this.verifyLogo();
        await this.verifyProfileButton();
        await this.verifySearchButton();
        await this.verifyCartButton();
        await this.verifyRudrakshCheckNowButton();
        await this.verifyRudrakshOrderReportBuyButton();
        await this.verifyProductRangeSectionHeadLine();
        await this.verifyGemStoneCollectionCard();
        await this.verifyRudrakshCollectionCard();
        await this.verifyJewelleryCollectionCard();
        await this.verifyStonesAndTreesCollectionCard();
    }
}

module.exports = HomePage;
