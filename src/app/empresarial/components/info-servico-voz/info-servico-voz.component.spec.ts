import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoServicoVozComponent } from './info-servico-voz.component';

describe('InfoServicoVozComponent', () => {
  let component: InfoServicoVozComponent;
  let fixture: ComponentFixture<InfoServicoVozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoServicoVozComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoServicoVozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
