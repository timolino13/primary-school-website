import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeggereOrologioComponent } from './leggere-orologio.component';

describe('LeggereOrologioComponent', () => {
  let component: LeggereOrologioComponent;
  let fixture: ComponentFixture<LeggereOrologioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeggereOrologioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeggereOrologioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
