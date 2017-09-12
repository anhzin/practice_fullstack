System.register(["../basepage"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var basepage_1, HomePage;
    return {
        setters: [
            function (basepage_1_1) {
                basepage_1 = basepage_1_1;
            }
        ],
        execute: function () {
            HomePage = class HomePage extends basepage_1.BasePage {
                constructor() {
                    super("ts/pages/home/home.html");
                }
            };
            exports_1("HomePage", HomePage);
        }
    };
});
