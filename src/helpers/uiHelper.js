(function (global) {
    global.UIHelper = {
        append: append,
        getHtml: getHtml
    }

    function getHtml(htmlUrl) {
        return $.get(htmlUrl);
    }

    function append(selector, html) {
        $(selector).append(html);
    }
})(window);