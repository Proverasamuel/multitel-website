import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMaisMultitelComponent } from './home-mais-multitel.component';

describe('HomeMaisMultitelComponent', () => {
  let component: HomeMaisMultitelComponent;
  let fixture: ComponentFixture<HomeMaisMultitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMaisMultitelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMaisMultitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
