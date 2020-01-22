import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    moduleId: module.id,
    selector: "signup-step-one-page",
    templateUrl: "./signup-step-one.component.html"
})
export class SignupStepOneComponent {

    constructor(
      private routerExtension: RouterExtensions
    ) { };

    onNavigateWelcome() {
      // Navigate to welcome page with clearHistory
      this.routerExtension.navigate(["../signup-step-two"], { clearHistory: false });
    }
}
