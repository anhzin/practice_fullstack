System.register(["../common/helpers/uihelper"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var uihelper_1, BasePage;
    return {
        setters: [
            function (uihelper_1_1) {
                uihelper_1 = uihelper_1_1;
            }
        ],
        execute: function () {
            BasePage = class BasePage {
                constructor(templateUrl) {
                    this.templateUrl = templateUrl;
                }
                render(renderTo = "body") {
                    var self = this;
                    this.renderTo = renderTo;
                    var templateUrl = this.templateUrl;
                    uihelper_1.default.get(templateUrl).then(function (html) {
                        uihelper_1.default.append(self.renderTo, html);
                    }).catchError(function (errors) {
                        console.log("error when get ui");
                    });
                }
            };
            exports_1("BasePage", BasePage);
        }
    };
});
