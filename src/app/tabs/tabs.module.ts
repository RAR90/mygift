import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TabsComponent } from "./tabs.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            {
                path: "default", component: TabsComponent, children: [
                    {
                        path: "players",
                        outlet: "playerTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/player/players.module#PlayersModule",
                    },
                    {
                        path: "filters",
                        outlet: "filtersTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/filters/filters.module#FiltersModule",
                    },
                    {
                        path: "user-infos",
                        outlet: "userInfosTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/user-infos/user-infos.module#UserInfosModule",
                    },
                    {
                        path: "product-cart",
                        outlet: "productsCartTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: "~/app/product-cart/products-cart.module#ProductsCartModule"
                    }
                ]
            }
        ])
    ],
    declarations: [
        TabsComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }