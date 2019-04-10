import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAgmMapComponent } from './comp-agm-map.component';

describe('CompAgmMapComponent', () => {
  let component: CompAgmMapComponent;
  let fixture: ComponentFixture<CompAgmMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompAgmMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompAgmMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
