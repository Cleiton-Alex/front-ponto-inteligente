import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharPfComponent } from './detalhar-pf.component';

describe('DetalharPfComponent', () => {
  let component: DetalharPfComponent;
  let fixture: ComponentFixture<DetalharPfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharPfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
