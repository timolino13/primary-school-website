import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoltiplicazioniDueCifreComponent } from './moltiplicazioni-due-cifre.component';

describe('MoltiplicazioniDueCifreComponent', () => {
  let component: MoltiplicazioniDueCifreComponent;
  let fixture: ComponentFixture<MoltiplicazioniDueCifreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoltiplicazioniDueCifreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoltiplicazioniDueCifreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
