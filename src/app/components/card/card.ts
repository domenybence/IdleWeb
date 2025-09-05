import { Component, Input } from "@angular/core";

@Component({
    selector: "Card",
    imports: [],
    templateUrl: "./card.html",
    styleUrl: "./card.scss"
})
export class Card {
    @Input() imageName = "placeholder.jpg";
    @Input() alt = "undefined";
    @Input() title = "undefined";

    get backgroundImage(): string {
        return `url("/images/${this.imageName}")`;
    }
}
