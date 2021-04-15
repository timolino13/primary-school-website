import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoltiplicazioniVirgolaComponent } from './moltiplicazioni-virgola.component';

describe('MoltiplicazioniVirgolaComponent', () => {
  let component: MoltiplicazioniVirgolaComponent;
  let fixture: ComponentFixture<MoltiplicazioniVirgolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoltiplicazioniVirgolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoltiplicazioniVirgolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
