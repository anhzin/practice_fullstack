System.register(["../../../common/page"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, SliderPage;
    return {
        setters: [
            function (page_1_1) {
                page_1 = page_1_1;
            }
        ],
        execute: function () {
            SliderPage = class SliderPage extends page_1.BasePage {
                constructor() {
                    super("ts/pages/components/slider/slider.html");
                }
            };
            exports_1("SliderPage", SliderPage);
        }
    };
});
