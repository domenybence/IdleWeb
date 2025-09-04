import { Component } from "@angular/core";
import { CardContainer } from "../../components/card-container/card-container";
import { Card } from "../../components/card/card";

@Component({
    selector: "app-home",
    imports: [
        CardContainer,
        Card
    ],
    templateUrl: "./home.html",
    styleUrl: "./home.scss"
})
export class Home {
    
}
