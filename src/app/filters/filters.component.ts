import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { EventData } from "tns-core-modules/ui/page/page";
import { Switch } from "tns-core-modules/ui/switch/switch";
import { RouterExtensions } from "nativescript-angular/router";
import { AppComponent } from "../app.component";

@Component({
    selector: "Filters",
    templateUrl: "./filters.component.html"
})

export class FiltersComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions, private appComponent: AppComponent) {
        // Use the component constructor to inject providers.
    }

    goToProducts() {
        this.appComponent.bottomNavigation.nativeElement.selectedIndex = 0;
    }

    onCheckedChange(args: EventData) {
        const sw = args.object as Switch;
        /// sw.checked; // boolean
    }

    ngOnInit(): void {

        // methods here
    }
}
