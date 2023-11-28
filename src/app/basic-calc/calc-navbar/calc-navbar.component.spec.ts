import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcNavbarComponent } from './calc-navbar.component';

describe('CalcNavbarComponent', () => {
  let component: CalcNavbarComponent;
  let fixture: ComponentFixture<CalcNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
