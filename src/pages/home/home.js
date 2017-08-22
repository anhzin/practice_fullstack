function HomePage() {
    var self = this;
    self.render = render;
    self.templateUrl = "./src/pages/home/home.html";
    self.selectorRender = "body";
    return self;

    function render(selector = "body") {
        var self = this;
        this.selectorRender = selector;
        window.uiHelper.getHtml(this.templateUrl).then(function (html) {
            window.uiHelper.appendHtml(self.selectorRender, html);
        }).catch((error) => {
            console.log(error);
        });
    }
}