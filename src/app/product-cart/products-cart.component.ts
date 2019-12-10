import { Component, OnInit } from "@angular/core";
import { DataService, DataItem } from "../data.service";

@Component({
    selector: "ns-products-cart",
    moduleId: module.id,
    templateUrl: "./products-cart.component.html",
})
export class ProductsCartComponent implements OnInit {
    items: DataItem[];

    constructor(private itemService: DataService) { }

    ngOnInit(): void {
        // TODO: alterar para get produtos da classe de serviço
        this.items = this.itemService.getTeams();
    }
}