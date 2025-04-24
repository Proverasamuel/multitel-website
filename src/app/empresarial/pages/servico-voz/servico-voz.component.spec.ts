import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoVozComponent } from './servico-voz.component';

describe('ServicoVozComponent', () => {
  let component: ServicoVozComponent;
  let fixture: ComponentFixture<ServicoVozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicoVozComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicoVozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
