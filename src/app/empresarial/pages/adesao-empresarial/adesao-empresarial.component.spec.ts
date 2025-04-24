import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdesaoEmpresarialComponent } from './adesao-empresarial.component';

describe('AdesaoEmpresarialComponent', () => {
  let component: AdesaoEmpresarialComponent;
  let fixture: ComponentFixture<AdesaoEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdesaoEmpresarialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdesaoEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
