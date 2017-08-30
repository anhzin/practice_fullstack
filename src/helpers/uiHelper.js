(function (global) {
    global.uiHelper = {
        getHtml: getHtml,
        appendHtml: appendHtml
    }

    function getHtml(url) {
        var promise = PromiseFactory.create();
        $.get(url, function (html) {
            console.log("getHtml uiHelper");
            promise.resolve(html);
        }).catch(function (error) {
            console.log("catch in uiHelper");
            promise.reject(error);
        });
        return promise;
    }

    function appendHtml(selector, html) {
        $(selector).append(html);
    }
})(window);