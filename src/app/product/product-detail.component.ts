import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService, DataItem } from "../shared/services/products.service";
import { Subscription } from "rxjs";
import { SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { action } from "tns-core-modules/ui/dialogs";

@Component({
  selector: "ns-product-details",
  moduleId: module.id,
  templateUrl: "./product-detail.component.html",
})
export class ProductDetailComponent implements OnInit {

  item: DataItem;
  subscription: Subscription;

  count: string;

  mySegmentedBarItems: Array<SegmentedBarItem> = [];
  itemSizes: Array<SegmentedBarItem> = [];

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute,
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
      message: "Seleciona quantos products desse você quer",
      cancelButtonText: "Cancel",
      actions: ["1", "2", "3", "4", "Mais De 5"]
    };
    action(options).then((result) => {
      console.log(result);
      this.count = result;
    });
  }

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