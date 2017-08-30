function FooterPage() {
    Page.call(this, "./src/pages/footer/footer.html");
}

FooterPage.prototype = new Page();
FooterPage.prototype.constructor = FooterPage;