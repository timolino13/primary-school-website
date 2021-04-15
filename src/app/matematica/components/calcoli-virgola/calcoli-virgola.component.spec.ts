import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcoliVirgolaComponent } from './calcoli-virgola.component';

describe('CalcoliVirgolaComponent', () => {
  let component: CalcoliVirgolaComponent;
  let fixture: ComponentFixture<CalcoliVirgolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcoliVirgolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcoliVirgolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
