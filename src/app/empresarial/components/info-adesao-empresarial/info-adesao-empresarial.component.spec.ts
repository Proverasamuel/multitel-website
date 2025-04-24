import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdesaoEmpresarialComponent } from './info-adesao-empresarial.component';

describe('InfoAdesaoEmpresarialComponent', () => {
  let component: InfoAdesaoEmpresarialComponent;
  let fixture: ComponentFixture<InfoAdesaoEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAdesaoEmpresarialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAdesaoEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
