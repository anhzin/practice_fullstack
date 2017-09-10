System.register(["../../../common/page"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, ServicesPage;
    return {
        setters: [
            function (page_1_1) {
                page_1 = page_1_1;
            }
        ],
        execute: function () {
            ServicesPage = class ServicesPage extends page_1.BasePage {
                constructor() {
                    super("ts/pages/components/services/services.html");
                }
            };
            exports_1("ServicesPage", ServicesPage);
        }
    };
});
