import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiconoscereSoldiComponent } from './riconoscere-soldi.component';

describe('RiconoscereSoldiComponent', () => {
  let component: RiconoscereSoldiComponent;
  let fixture: ComponentFixture<RiconoscereSoldiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiconoscereSoldiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiconoscereSoldiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
