function HomePage() {
    var self = this;
    self.selectorRender = "";
    self.templateUrl = "./src/pages/homepage.html";
    self.render = render;
    return self;

    function render(selector = "body") {
        var self = this;
        console.log("call render in HomePage");
        this.selectorRender = selector;
        window.UIHelper.getHtml(this.templateUrl).then(function (html) {
            console.log(html);
            window.UIHelper.append(self.selectorRender, html);
        });
    }

}