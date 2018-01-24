import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutwearComponent } from './outwear.component';

describe('OutwearComponent', () => {
  let component: OutwearComponent;
  let fixture: ComponentFixture<OutwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
