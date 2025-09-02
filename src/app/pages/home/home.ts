import { Component } from "@angular/core";
import { CardContainer } from "../../components/card-container/card-container";

@Component({
    selector: "app-home",
    imports: [
        CardContainer
    ],
    templateUrl: "./home.html",
    styleUrl: "./home.scss"
})
export class Home {
    
}
