import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentIndicatorComponent } from './environment-indicator.component';

describe('EnvironmentIndicatorComponent', () => {
  let component: EnvironmentIndicatorComponent;
  let fixture: ComponentFixture<EnvironmentIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironmentIndicatorComponent]
    });
    fixture = TestBed.createComponent(EnvironmentIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
