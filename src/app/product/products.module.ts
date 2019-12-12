
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ProductsComponent } from "./products.component";
import { ProductDetailComponent } from "./product-detail.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "products" },
            { path: "products", component: ProductsComponent },
            { path: "product/:id", component: ProductDetailComponent },
        ])
    ],
    declarations: [
        ProductsComponent,
        ProductDetailComponent,
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProductsModule { }
