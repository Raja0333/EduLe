import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHeroComponent } from './common-hero.component';

describe('CommonHeroComponent', () => {
  let component: CommonHeroComponent;
  let fixture: ComponentFixture<CommonHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
