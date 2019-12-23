import { Component, OnInit } from "@angular/core";
import { DataService, DataItem } from "../shared/services/products-cart.service";
import { RouterExtensions } from "nativescript-angular/router";
import { TabsComponent } from "../tabs/tabs.component";

@Component({
    selector: "ns-products-cart",
    moduleId: module.id,
    templateUrl: "./products-cart.component.html",
})
export class ProductsCartComponent implements OnInit {

    items: DataItem[];

    constructor(
        private itemService: DataService,
        private routerExtension: RouterExtensions,
        private appComponent: TabsComponent
    ) { }

    goToProducts() {
        this.appComponent.bottomNavigationChild.nativeElement.selectedIndex = 1;
    }

    goToSearch() {
        this.appComponent.bottomNavigationChild.nativeElement.selectedIndex = 3;
    }

    goToProfile() {
        this.routerExtension.navigate(["/search"], { clearHistory: false });
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}