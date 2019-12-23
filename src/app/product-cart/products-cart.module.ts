
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ProductsCartComponent } from "./products-cart.component";
import { ProductCartDetailComponent } from "./product-cart-detail.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "products-cart" },
            { path: "products-cart", component: ProductsCartComponent },
            { path: "product-cart/:id", component: ProductCartDetailComponent },
        ])
    ],
    declarations: [
        ProductsCartComponent,
        ProductCartDetailComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProductsCartModule { }
