import { Component, OnInit } from "@angular/core";
import { Person } from "../shared/person";

@Component({
    selector: "Profile",
    templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {

    private myperson: Person;

    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        this.myperson = new Person("Rafael Ribeiro", "29", "rafael@teclabs.com.br", "16 98252-9392", "Ribeirão Preto", "5th Avenue, 11", "40595304842");
    }

    get person(): Person {
        return this.myperson;
    }
}
