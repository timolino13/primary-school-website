import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisurePesoComponent } from './misure-peso.component';

describe('MisurePesoComponent', () => {
  let component: MisurePesoComponent;
  let fixture: ComponentFixture<MisurePesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisurePesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisurePesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
