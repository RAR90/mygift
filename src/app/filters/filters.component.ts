import { RouterExtensions } from "nativescript-angular/router";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/segmented-bar";
import { TabsComponent } from "../tabs/tabs.component";

@Component({
    moduleId: module.id,
    selector: "filters-page",
    templateUrl: "./filters.component.html"
})
export class FiltersComponent {

    bothClicked: boolean = true;
    maleClicked: boolean = false;
    femaleClicked: boolean = false;
    otherClicked: boolean = false;

    kidsClicked: boolean = false;
    teenClicked: boolean = false;
    adultClicked: boolean = false;

    clothesClicked: boolean = false;
    shoesClicked: boolean = false;
    fittingsClicked: boolean = false;

    constructor(
        private routerExtension: RouterExtensions,
        private appComponent: TabsComponent
    ) { };

    filter() {
        // Navigate to welcome page with clearHistory
        this.appComponent.bottomNavigationChild.nativeElement.selectedIndex = 0;
    }
}
