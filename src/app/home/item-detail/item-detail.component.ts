import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService, IDataItem } from "../../shared/data.service";
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/segmented-bar";

import { action } from "tns-core-modules/ui/dialogs";

@Component({
    selector: "ItemDetail",
    templateUrl: "./item-detail.component.html"
})

export class ItemDetailComponent implements OnInit {
    item: IDataItem;

    count: string;

    mySegmentedBarItems: Array<SegmentedBarItem> = [];

    itemSizes: Array<SegmentedBarItem> = [];

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) {

        this.count = "1";

        for (let i = 1; i < 5; i++) {
            const item = new SegmentedBarItem();
            item.title = "\uf272 " + i;
            this.mySegmentedBarItems.push(item);
        }

        let newItem = new SegmentedBarItem();
        newItem.title = "P";
        this.itemSizes.push(newItem);

        newItem = new SegmentedBarItem();
        newItem.title = "M";
        this.itemSizes.push(newItem);

        newItem = new SegmentedBarItem();
        newItem.title = "G";
        this.itemSizes.push(newItem);

        newItem = new SegmentedBarItem();
        newItem.title = "GG";
        this.itemSizes.push(newItem);

    }

    displayActionDialog() {

        const options = {
            title: "Quantidade",
            message: "Seleciona quantos produtos desse você quer",
            cancelButtonText: "Cancel",
            actions: ["1", "2", "3", "4", "Mais De 5"]
        };

        action(options).then((result) => {
            console.log(result);
            this.count = result;
        });

    }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        this.item = this._data.getItem(id);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
