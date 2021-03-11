import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiuMenoComponent } from './piu-meno.component';

describe('PiuMenoComponent', () => {
  let component: PiuMenoComponent;
  let fixture: ComponentFixture<PiuMenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiuMenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiuMenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
