import { Component, OnInit } from "@angular/core";
import { DataService, DataItem } from "../data.service";

@Component({
    selector: "ns-products",
    moduleId: module.id,
    templateUrl: "./products.component.html",
})
export class ProductsComponent implements OnInit {
    items: DataItem[];

    constructor(private itemService: DataService) { }

    ngOnInit(): void {
        this.items = this.itemService.getTeams();
    }
}