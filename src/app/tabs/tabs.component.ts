import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "tabs-page",
    templateUrl: "./tabs.component.html"
})
export class TabsComponent {
    constructor(
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.routerExtension.navigate([{ outlets: { playerTab: ["players"], userInfosTab: ["user-infos"], filtersTab: ["filters"], productsCartTab: ["product-cart"] } }], { relativeTo: this.activeRoute });
    }
}
