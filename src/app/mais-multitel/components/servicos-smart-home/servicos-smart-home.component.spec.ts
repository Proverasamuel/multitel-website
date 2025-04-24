import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosSmartHomeComponent } from './servicos-smart-home.component';

describe('ServicosSmartHomeComponent', () => {
  let component: ServicosSmartHomeComponent;
  let fixture: ComponentFixture<ServicosSmartHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosSmartHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosSmartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
