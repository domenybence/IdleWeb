import { Component, Input } from "@angular/core";

@Component({
    selector: "CardContainer",
    imports: [],
    templateUrl: "./card-container.html",
    styleUrl: "./card-container.scss"
})
export class CardContainer {
    @Input() content = ""; 
}
