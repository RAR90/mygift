import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { AppComponent } from "../app.component";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private _itemService: DataService, private appComponent: AppComponent) { }

    goToProducts() {
        this.appComponent.bottomNavigationChild.nativeElement.selectedIndex = 1;
    }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
