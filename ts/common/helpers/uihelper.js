System.register(["../promise"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function get(templateUrl) {
        var promiseFactory = promise_1.PromiseFactory.create();
        window.jQuery.get(templateUrl)
            .then(function (html) {
            promiseFactory.resolve(html);
        })
            .catch(function (errors) {
            promiseFactory.reject(errors);
        });
        return promiseFactory;
    }
    function append(selector, html) {
        window.jQuery(selector).append(html);
    }
    var promise_1, uiHelper;
    return {
        setters: [
            function (promise_1_1) {
                promise_1 = promise_1_1;
            }
        ],
        execute: function () {
            uiHelper = {
                get: get,
                append: append
            };
            exports_1("default", uiHelper);
        }
    };
});
