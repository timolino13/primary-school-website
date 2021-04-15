import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConoscenzeGeneraliComponent } from './conoscenze-generali.component';

describe('ConoscenzeGeneraliComponent', () => {
  let component: ConoscenzeGeneraliComponent;
  let fixture: ComponentFixture<ConoscenzeGeneraliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConoscenzeGeneraliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConoscenzeGeneraliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
