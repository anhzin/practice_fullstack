System.register(["../../../common/page"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, FooterPage;
    return {
        setters: [
            function (page_1_1) {
                page_1 = page_1_1;
            }
        ],
        execute: function () {
            FooterPage = class FooterPage extends page_1.BasePage {
                constructor() {
                    super("ts/pages/components/footer/footer.html");
                }
            };
            exports_1("FooterPage", FooterPage);
        }
    };
});
