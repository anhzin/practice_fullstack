function SliderPage() {
    Page.call(this, "./src/pages/slider/slider.html");
}

SliderPage.prototype = new Page();
SliderPage.prototype.constructor = SliderPage;