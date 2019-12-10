import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    moduleId: module.id,
    selector: "filters-page",
    templateUrl: "./filters.component.html"
})
export class FiltersComponent {
    constructor(private routerExtension: RouterExtensions) { };

    onNavigateWelcome() {
        // Navigate to welcome page with clearHistory
        this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    }
}
