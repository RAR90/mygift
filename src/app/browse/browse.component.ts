import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { EventData } from "tns-core-modules/ui/page/page";
import { Switch } from "tns-core-modules/ui/switch/switch";
import { RouterExtensions } from "nativescript-angular/router";
import { AppComponent } from "../app.component";
import { IDataItem, DataService } from "../shared/cart.service";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})

export class BrowseComponent implements OnInit {

    items: Array<IDataItem>;

    constructor(
        private _itemService: DataService,
        private routerExtensions: RouterExtensions,
        private appComponent: AppComponent
    ) {
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
        this.items = this._itemService.getItems();
        // methods here
    }
}
