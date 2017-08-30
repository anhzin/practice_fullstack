function HomePage() {
    Page.call(this, "./src/pages/home/home.html");
}

HomePage.prototype = new Page();
HomePage.prototype.constructor = HomePage;