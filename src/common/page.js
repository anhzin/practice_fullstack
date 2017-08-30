function Page(templateUrl) {
    var self = this;
    self.templateUrl = templateUrl;
    self.selectorRender = "";
    self.render = render;
    return self;

    function render(selector = "body") {
        this.selectorRender = selector;
        window.uiHelper.getHtml(this.templateUrl).then(function (html) {
            window.uiHelper.appendHtml(self.selectorRender, html);
        }).catch((error) => {
            console.log(error);``
        });
    }
}