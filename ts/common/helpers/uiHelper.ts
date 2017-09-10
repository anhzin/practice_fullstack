import { PromiseFactory } from "../promise";
let uiHelper = {
    get: get,
    append: append
};
export default uiHelper;
function get(templateUrl: string) {
    var def = PromiseFactory.create();
    window.jQuery.get(templateUrl)
        .then(function (html) {
            def.resolve(html);
        })
        .catch(function (errors) {
            def.reject(errors);
        })
    return def;
}

function append(selector, html) {
    window.jQuery(selector).append(html);
}