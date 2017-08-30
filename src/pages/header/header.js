function HeaderPage() {
    Page.call(this, "./src/pages/header/header.html");
}

HeaderPage.prototype = new Page();
HeaderPage.prototype.constructor = HeaderPage;