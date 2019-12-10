import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    moduleId: module.id,
    selector: "signup-step-three-page",
    templateUrl: "./signup-step-three.component.html"
})
export class SignupStepThreeComponent {

    constructor(
      private routerExtension: RouterExtensions
    ) { };

    onNavigateWelcome() {
      // Navigate to welcome page with clearHistory
      this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    }
}
