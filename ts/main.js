System.register(["./pages/home/home", "./pages/components/header/header", "./pages/components/slider/slider", "./pages/components/services/services", "./pages/components/shopping-cart/shopping-cart", "./pages/components/footer/footer"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var home_1, header_1, slider_1, services_1, shopping_cart_1, footer_1, homePage, headerPage, sliderPage, servicesPage, shoppingCartPage, footerPage;
    return {
        setters: [
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (slider_1_1) {
                slider_1 = slider_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            },
            function (shopping_cart_1_1) {
                shopping_cart_1 = shopping_cart_1_1;
            },
            function (footer_1_1) {
                footer_1 = footer_1_1;
            }
        ],
        execute: function () {
            homePage = new home_1.HomePage();
            homePage.render();
            headerPage = new header_1.HeaderPage();
            headerPage.render(".page__header");
            sliderPage = new slider_1.SliderPage();
            sliderPage.render(".page__content");
            servicesPage = new services_1.ServicesPage();
            servicesPage.render(".page__content");
            shoppingCartPage = new shopping_cart_1.ShoppingCartPage();
            shoppingCartPage.render(".page__content");
            footerPage = new footer_1.FooterPage();
            footerPage.render(".page__footer");
        }
    };
});
