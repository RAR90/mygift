import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    moduleId: module.id,
    selector: "welcome-page",
    templateUrl: "./welcome.component.html"
})
export class WelcomeComponent {
    constructor(
        private routerExtension: RouterExtensions
    ) {
        this.routerExtension.navigate(['/tabs/default'], { clearHistory: true });
    };

    onLogout() {
        // Navigate to login page with clearHistory
        this.routerExtension.navigate(["../login"], { clearHistory: true });
    }
}
