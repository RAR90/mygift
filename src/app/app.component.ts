import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    [x: string]: any;

    @ViewChild("bottomNavigation", {static: false}) bottomNavigation: ElementRef;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
