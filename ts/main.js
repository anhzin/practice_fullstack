System.register(["./pages/home"], function(exports_1) {
    var home_1;
    var homePage;
    return {
        setters:[
            function (_home_1) {
                home_1 = _home_1;
            }],
        execute: function() {
            homePage = new home_1.HomePage();
            homePage.render();
        }
    }
});
