(function (global) {
    global.uiHelper = {
        getHtml: getHtml,
        appendHtml: appendHtml
    }

    function getHtml(url) {
        var promise = new Promise(function (resolve, reject) {
            $.get(url, function (html) {
                resolve(html);
            }).catch((error) => {
                reject(error);
            });
        });
        return promise;
    }

    function appendHtml(selector, html) {
        $(selector).append(html);
    }
})(window);