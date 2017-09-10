import uiHelper from "../common/helpers/uiHelper";
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
        uiHelper.get(this.templateUrl).
            then(function (html) {
                uiHelper.append(self.renderTo, html);
            })
            .catchError(function (error) {
                console.log("error: ", error);
            });
    }

}