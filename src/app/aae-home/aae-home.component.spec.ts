import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaeHomeComponent } from './aae-home.component';

describe('AaeHomeComponent', () => {
  let component: AaeHomeComponent;
  let fixture: ComponentFixture<AaeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
