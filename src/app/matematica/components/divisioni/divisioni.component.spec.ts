import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisioniComponent } from './divisioni.component';

describe('DivisioniComponent', () => {
  let component: DivisioniComponent;
  let fixture: ComponentFixture<DivisioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
