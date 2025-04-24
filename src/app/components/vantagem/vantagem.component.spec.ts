import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagemComponent } from './vantagem.component';

describe('VantagemComponent', () => {
  let component: VantagemComponent;
  let fixture: ComponentFixture<VantagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VantagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VantagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
