import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

import { NgShadowModule } from "nativescript-ng-shadow";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProductsRoutingModule,
        NgShadowModule
    ],
    declarations: [
        ProductsComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProductsModule { }
