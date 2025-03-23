import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoureseFotterComponent } from './courese-fotter.component';

describe('CoureseFotterComponent', () => {
  let component: CoureseFotterComponent;
  let fixture: ComponentFixture<CoureseFotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoureseFotterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoureseFotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
