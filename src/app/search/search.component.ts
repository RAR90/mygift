import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    moduleId: module.id,
    selector: "search-page",
    templateUrl: "./search.component.html"
})
export class SearchComponent {
    constructor(private routerExtension: RouterExtensions) { };

    onNavigateWelcome() {
        // Navigate to welcome page with clearHistory
        this.routerExtension.navigate(["../welcome"], { clearHistory: true });
    }
}
