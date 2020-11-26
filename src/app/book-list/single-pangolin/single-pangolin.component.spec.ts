import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePangolinComponent } from './single-pangolin.component';

describe('SinglePangolinComponent', () => {
  let component: SinglePangolinComponent;
  let fixture: ComponentFixture<SinglePangolinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePangolinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePangolinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
