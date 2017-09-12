import { PromiseFactory } from "../promise";
let uiHelper = {
    get: get,
    append: append
}
export default uiHelper;
function get(templateUrl: string) {
    var promiseFactory = PromiseFactory.create();
    window.jQuery.get(templateUrl)
        .then(function (html) {
            promiseFactory.resolve(html);
        })
        .catch(function (errors) {
            promiseFactory.reject(errors);
        })
    return promiseFactory;
}

function append(selector, html) {
    window.jQuery(selector).append(html);
}
