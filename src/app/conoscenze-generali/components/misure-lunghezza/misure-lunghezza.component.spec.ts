import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisureLunghezzaComponent } from './misure-lunghezza.component';

describe('MisureLunghezzaComponent', () => {
  let component: MisureLunghezzaComponent;
  let fixture: ComponentFixture<MisureLunghezzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisureLunghezzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisureLunghezzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
