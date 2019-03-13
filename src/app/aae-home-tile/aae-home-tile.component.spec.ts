import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaeHomeTileComponent } from './aae-home-tile.component';

describe('AaeHomeTileComponent', () => {
  let component: AaeHomeTileComponent;
  let fixture: ComponentFixture<AaeHomeTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaeHomeTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaeHomeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
