import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService, DataItem } from "../shared/services/products.service";
import { Subscription } from "rxjs";

@Component({
    selector: "ns-product-cart-details",
    moduleId: module.id,
    templateUrl: "./product-cart-detail.component.html",
})
export class ProductCartDetailComponent implements OnInit {

    item: DataItem;
    subscription: Subscription;

    constructor(
        private data: DataService,
        private route: ActivatedRoute,
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe(params => {
            const id = +params["id"];
            this.item = this.data.getItem(id);
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    backProducts() {
        this.routerExtension.back({ relativeTo: this.activeRoute });
    }
}