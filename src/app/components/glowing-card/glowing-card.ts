import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";

@Component({
    selector: "GlowingCard",
    imports: [],
    templateUrl: "./glowing-card.html",
    styleUrl: "./glowing-card.scss"
})
export class GlowingCard {
    @ViewChild("card") card!: ElementRef<HTMLDivElement>;

    ngAfterViewInit() {
        const card = this.card.nativeElement;

        card.addEventListener("mousemove", (e) => animateCard(e));
        card.addEventListener("mouseenter", (e) => animateCard(e));

        function animateCard(e: MouseEvent) {
            console.log(e.type);
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
        }
    }
}
