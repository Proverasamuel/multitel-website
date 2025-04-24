import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselMaisMultitelComponent } from './carrossel-mais-multitel.component';

describe('CarrosselMaisMultitelComponent', () => {
  let component: CarrosselMaisMultitelComponent;
  let fixture: ComponentFixture<CarrosselMaisMultitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselMaisMultitelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosselMaisMultitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
