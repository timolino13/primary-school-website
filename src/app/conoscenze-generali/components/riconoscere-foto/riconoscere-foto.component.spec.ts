import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiconoscereFotoComponent } from './riconoscere-foto.component';

describe('RiconoscereFotoComponent', () => {
  let component: RiconoscereFotoComponent;
  let fixture: ComponentFixture<RiconoscereFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiconoscereFotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiconoscereFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
