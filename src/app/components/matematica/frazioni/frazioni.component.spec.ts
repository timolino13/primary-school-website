import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrazioniComponent } from './frazioni.component';

describe('FrazioniComponent', () => {
  let component: FrazioniComponent;
  let fixture: ComponentFixture<FrazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
