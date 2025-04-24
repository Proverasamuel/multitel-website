import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentEmpresarial } from './home.component';

describe('HomeComponentEmpresarial', () => {
  let component: HomeComponentEmpresarial;
  let fixture: ComponentFixture<HomeComponentEmpresarial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponentEmpresarial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentEmpresarial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
