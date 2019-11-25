import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { AppComponent } from "../app.component";

@Component({
    selector: "Products",
    templateUrl: "./products.component.html"
})
export class ProductsComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private _itemService: DataService, private appComponent: AppComponent) { }

    goToProducts() {
        this.appComponent.bottomNavigationChild.nativeElement.selectedIndex = 1;
    }

    goToSearch() {
        this.appComponent.bottomNavigationChild.nativeElement.selectedIndex = 3;
    }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
