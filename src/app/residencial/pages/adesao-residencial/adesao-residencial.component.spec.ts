import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdesaoResidencialComponent } from './adesao-residencial.component';

describe('AdesaoResidencialComponent', () => {
  let component: AdesaoResidencialComponent;
  let fixture: ComponentFixture<AdesaoResidencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdesaoResidencialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdesaoResidencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
