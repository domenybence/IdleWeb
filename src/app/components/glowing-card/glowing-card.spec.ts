import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingCard } from './glowing-card';

describe('GlowingCard', () => {
    let component: GlowingCard;
    let fixture: ComponentFixture<GlowingCard>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GlowingCard]
        })
            .compileComponents();

        fixture = TestBed.createComponent(GlowingCard);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
