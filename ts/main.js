System.register(["./pages/home/home"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_1, homePage;
    return {
        setters: [
            function (home_1_1) {
                home_1 = home_1_1;
            }
        ],
        execute: function () {
            homePage = new home_1.HomePage();
            homePage.render("body");
        }
    };
});
