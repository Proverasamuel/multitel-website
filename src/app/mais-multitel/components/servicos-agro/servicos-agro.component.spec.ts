import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosAgroComponent } from './servicos-agro.component';

describe('ServicosAgroComponent', () => {
  let component: ServicosAgroComponent;
  let fixture: ComponentFixture<ServicosAgroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosAgroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosAgroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
