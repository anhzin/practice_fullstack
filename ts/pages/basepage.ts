import uiHelper from "../common/helpers/uihelper";
export class BasePage {
    public templateUrl: string;
    public renderTo: string;
    constructor(templateUrl: string) {
        this.templateUrl = templateUrl;
    }
    public render(renderTo: string = "body"): void {
        var self = this;
        this.renderTo = renderTo;
        var templateUrl = this.templateUrl;
        uiHelper.get(templateUrl).then(function (html) {
            uiHelper.append(self.renderTo, html);
        }).catchError(function(errors){
            console.log("error when get ui");
        })
    }
}