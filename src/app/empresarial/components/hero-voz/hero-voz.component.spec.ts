import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroVozComponent } from './hero-voz.component';

describe('HeroVozComponent', () => {
  let component: HeroVozComponent;
  let fixture: ComponentFixture<HeroVozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroVozComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroVozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
