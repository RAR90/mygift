import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    moduleId: module.id,
    selector: "user-infos-page",
    templateUrl: "./user-infos.component.html"
})
export class UserInfosComponent {
    constructor(private routerExtension: RouterExtensions) { };

    onNavigateWelcome() {
        // Navigate to welcome page with clearHistory
        this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    }
}
