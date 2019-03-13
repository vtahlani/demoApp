import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioConstructorComponent } from './portfolio-constructor.component';

describe('PortfolioConstructorComponent', () => {
  let component: PortfolioConstructorComponent;
  let fixture: ComponentFixture<PortfolioConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
