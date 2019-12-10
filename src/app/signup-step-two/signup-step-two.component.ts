import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    moduleId: module.id,
    selector: "signup-step-two-page",
    templateUrl: "./signup-step-two.component.html"
})
export class SignupStepTwoComponent {

    constructor(
      private routerExtension: RouterExtensions
    ) { };

    onNavigateWelcome() {
      // Navigate to welcome page with clearHistory
      this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    }
}
