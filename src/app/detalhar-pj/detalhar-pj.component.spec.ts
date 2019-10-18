import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharPjComponent } from './detalhar-pj.component';

describe('DetalharPjComponent', () => {
  let component: DetalharPjComponent;
  let fixture: ComponentFixture<DetalharPjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharPjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
