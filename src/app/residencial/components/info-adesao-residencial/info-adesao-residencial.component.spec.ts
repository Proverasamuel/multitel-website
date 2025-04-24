import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdesaoResidencialComponent } from './info-adesao-residencial.component';

describe('InfoAdesaoResidencialComponent', () => {
  let component: InfoAdesaoResidencialComponent;
  let fixture: ComponentFixture<InfoAdesaoResidencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAdesaoResidencialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAdesaoResidencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
