import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FiltersRoutingModule } from "./filters-routing.module";
import { FiltersComponent } from "./filters.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FiltersRoutingModule
    ],
    declarations: [
        FiltersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FiltersModule { }
