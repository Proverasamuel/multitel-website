import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoVozEmpresaComponent } from './plano-voz-empresa.component';

describe('PlanoVozEmpresaComponent', () => {
  let component: PlanoVozEmpresaComponent;
  let fixture: ComponentFixture<PlanoVozEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoVozEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoVozEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
