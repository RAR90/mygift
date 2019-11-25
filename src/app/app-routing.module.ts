import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(productsTab:products/default//filtersTab:filters/default//browseTab:browse/default//searchTab:search/default//profileTab:profile/default)",
        pathMatch: "full"
    },
    {
        path: "profile",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/profile/profile.module").then((m) => m.ProfileModule),
        outlet: "profileTab"
    },
    {
        path: "products",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/products/products.module").then((m) => m.ProductsModule),
        outlet: "productsTab"
    },
    {
        path: "filters",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/filters/filters.module").then((m) => m.FiltersModule),
        outlet: "filtersTab"
    },
    {
        path: "browse",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule),
        outlet: "browseTab"
    },
    {
        path: "search",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule),
        outlet: "searchTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
